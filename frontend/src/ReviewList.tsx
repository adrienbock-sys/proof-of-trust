import React from 'react';

interface Review {
  id: number;
  author: string;
  title: string;
  rating: number;
  content: string;
  timestamp: number;
}

interface ReviewListProps {
  reviews: Review[];
  isLoading: boolean;
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews, isLoading }) => {
  if (isLoading) return <div className="loading">Chargement...</div>;
  if (reviews.length === 0) return <div className="empty">Aucun avis pour l'instant</div>;

  return (
    <div className="review-list">
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <h3>{review.title}</h3>
          <div className="rating">{'⭐'.repeat(review.rating)}</div>
          <p>{review.content}</p>
          <div className="meta">
            <span className="author">Par: {review.author.slice(0, 8)}...</span>
            <span className="date">
              {new Date(Number(review.timestamp) / 1000000).toLocaleDateString('fr-FR')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
