import Image from "next/image";
import styles from "./page.module.css";
import Banner from './components/Banner';
import MusicBlock from './components/MusicBlock';
import VideoBlock from './components/VideoBlock';
import { Actors } from "./components/Actors";

export default function Home() {
  return (
    <div>
      <VideoBlock />
      <Banner />
      <Actors />
      <MusicBlock />
      {/* Другие секции сайта */}
    </div>
  );
}
