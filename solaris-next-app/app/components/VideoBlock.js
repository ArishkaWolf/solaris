// app/components/VideoBlock.js
import styles from './VideoBlock.module.css';

const VideoBlock = () => {
  return (
    <div className={styles.videoBlock}>
      <video
        className={styles.video}
        controls
        autoPlay
        loop
        muted
        src="/nachal.mp4"
        poster="/video/poster.jpg"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBlock;
