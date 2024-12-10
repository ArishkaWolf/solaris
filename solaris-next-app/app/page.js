import Image from "next/image";
import styles from "./page.module.css";
import Banner from './components/Banner';
import MusicBlock from './components/MusicBlock';

export default function Home() {
  return (
    <div>
      <Banner />
      <MusicBlock />
      {/* Другие секции сайта */}
    </div>
  );
}
