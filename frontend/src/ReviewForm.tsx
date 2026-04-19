import React, { useState } from 'react';

interface ReviewFormProps {
  voiceContent: string;
  onSubmit: (review: { title: string; rating: number; content: string }) => void;
  isLoading: boolean;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
  voiceContent,
  onSubmit,
  isLoading,
}) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('5');
  const [content, setContent] = useState(voiceContent);

  React.useEffect(() => {
    setContent(voiceContent);
  }, [voiceContent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    onSubmit({
      title,
      rating: parseInt(rating),
      content,
    });
    setTitle('');
    setRating('5');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <input
        type="text"
        placeholder="Titre de l'avis"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">⭐ 1 - Mauvais</option>
        <option value="2">⭐⭐ 2 - Moyen</option>
        <option value="3">⭐⭐⭐ 3 - Bon</option>
        <option value="4">⭐⭐⭐⭐ 4 - Très bon</option>
        <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
      </select>
      <textarea
        placeholder="Contenu de l'avis"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Soumission...' : 'Soumettre l\'avis'}
      </button>
    </form>
  );
};
