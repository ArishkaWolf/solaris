import Image from "next/image";
import styles from "./page.module.css";
import Banner from './components/Banner';
import MusicBlock from './components/MusicBlock';
import VideoBlock from './components/VideoBlock';

export default function Home() {
  return (
    <div>
      <VideoBlock />
      <Banner />
      <MusicBlock />
      {/* Другие секции сайта */}
    </div>
  );
}
