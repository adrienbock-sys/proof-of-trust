import React, { useState, useRef } from 'react';

interface VoiceInputProps {
  onTranscriptChange: (transcript: string) => void;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({ onTranscriptChange }) => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  React.useEffect(() => {
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!SpeechRecognition) return;

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = 'fr-FR';
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onstart = () => setIsListening(true);
    recognitionRef.current.onend = () => setIsListening(false);
    recognitionRef.current.onerror = (event: any) => console.error('Speech error:', event.error);

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const currentTranscript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + currentTranscript + ' ');
          onTranscriptChange(transcript + currentTranscript + ' ');
        } else {
          interimTranscript += currentTranscript;
        }
      }
    };
  }, [transcript, onTranscriptChange]);

  const startListening = () => recognitionRef.current?.start();
  const stopListening = () => recognitionRef.current?.stop();
  const clearTranscript = () => {
    setTranscript('');
    onTranscriptChange('');
  };

  return (
    <div className="voice-controls">
      <button
        onClick={startListening}
        disabled={isListening}
        className="btn-start"
      >
        Commencer
      </button>
      <button
        onClick={stopListening}
        disabled={!isListening}
        className="btn-stop"
      >
        Arrêter
      </button>
      <button onClick={clearTranscript} className="btn-clear">
        Effacer
      </button>
      <div className="transcript-display">
        {transcript || 'En attente...'}
      </div>
    </div>
  );
};
