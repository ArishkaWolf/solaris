'use client';

import React, { useState } from 'react';
import styles from './MusicBlock.module.css';

const MusicBlock = () => {
  const mainSong = { title: 'Основная мелодия', src: '/songs/Kris 3 Var 3.mp3' };
  const additionalSongs = [
    { title: 'Песня 2', src: '/songs/song2.mp3' },
    { title: 'Песня 3', src: '/songs/song3.mp3' },
    { title: 'Песня 4', src: '/songs/song4.mp3' },
    { title: 'Песня 5', src: '/songs/song5.mp3' },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSongs = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.musicBlockContainer}>
      <section className={styles.musicBlock}>
        <h2 className={styles.heading}>Композитор: Иван Никулин</h2>

        {/* Основная мелодия */}
        <div className={styles.mainSong}>
          <p className={styles.songTitle}>{mainSong.title}</p>
          <audio controls className={styles.audioPlayer}>
            <source src={mainSong.src} type="audio/mpeg" />
            Ваш браузер не поддерживает аудио.
          </audio>
        </div>

        {/* Кнопка для разворачивания/сворачивания */}
        <button className={styles.toggleButton} onClick={toggleSongs}>
          {isExpanded ? 'Скрыть остальные песни' : 'Показать остальные песни'}
        </button>

        {/* Дополнительные песни */}
        {isExpanded && (
          <ul className={styles.songList}>
            {additionalSongs.map((song, index) => (
              <li key={index} className={styles.songItem}>
                <p className={styles.songTitle}>{song.title}</p>
                <audio controls className={styles.audioPlayer}>
                  <source src={song.src} type="audio/mpeg" />
                  Ваш браузер не поддерживает аудио.
                </audio>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default MusicBlock;
