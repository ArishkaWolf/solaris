'use client';

import { useState } from 'react';
import styles from './FlipCard.module.css';

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.cardContainer} onClick={handleFlip}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        {/* Передняя сторона карточки */}
        <div className={styles.front}>
          <img
            src="/cards/card.jpg" // Замени путь на свою картинку
            alt="Card Cover"
            className={styles.coverImage}
          />
        </div>
        {/* Задняя сторона карточки */}
        <div className={styles.back}>
          <p className={styles.infoText}>
            Это текст, который будет отображаться на обратной стороне карточки.
          </p>
        </div>
      </div>
    </div>
  );
};
