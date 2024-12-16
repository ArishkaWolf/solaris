import Image from "next/image";
import styles from "./page.module.css";
import Banner from './components/Banner';
import { TracksSection } from './components/TracksSection';
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
      <TracksSection />
      {/* Другие секции сайта */}
    </div>
  );
}
