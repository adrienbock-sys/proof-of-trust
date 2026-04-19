import React, { useState, useEffect } from 'react';
import { VoiceInput } from './VoiceInput';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import './App.css';

interface Review {
  id: number;
  author: string;
  title: string;
  rating: number;
  content: string;
  timestamp: number;
}

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [voiceContent, setVoiceContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    setIsLoading(true);
    try {
      // Placeholder for backend integration
      console.log('Loading reviews from backend...');
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (review: {
    title: string;
    rating: number;
    content: string;
  }) => {
    setIsLoading(true);
    try {
      console.log('Submitting review:', review);
      // Placeholder for backend integration
      setVoiceContent('');
      await loadReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Proof of Trust</h1>
        <p>Avis immuables via blockchain</p>
      </header>

      <main className="container">
        <section className="voice-section">
          <h2>Enregistrer votre avis</h2>
          <VoiceInput onTranscriptChange={setVoiceContent} />
        </section>

        <section className="form-section">
          <h2>Compléter l'avis</h2>
          <ReviewForm
            voiceContent={voiceContent}
            onSubmit={handleFormSubmit}
            isLoading={isLoading}
          />
        </section>

        <section className="reviews-section">
          <h2>Tous les avis</h2>
          <ReviewList reviews={reviews} isLoading={isLoading} />
        </section>
      </main>
    </div>
  );
}

export default App;
