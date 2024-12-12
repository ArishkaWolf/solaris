import Image from "next/image";
import styles from "./page.module.css";
import Banner from './components/Banner';
import MusicBlock from './components/MusicBlock';
import VideoBlock from './components/VideoBlock';
import { Actors } from "./components/Actors";
import Description from './components/Description'; 

export default function Home() {
  return (
    <div>
      <VideoBlock />
      <Description />
      <Banner /> 
      <Actors />
      <MusicBlock />
      {/* Другие секции сайта */}
    </div>
  );
}
