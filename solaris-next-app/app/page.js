import Image from "next/image";
import styles from "./page.module.css";
import Banner from './components/Banner';
import { TracksSection } from './components/TracksSection';
import VideoBlock from './components/VideoBlock';
import { Actors } from "./components/Actors";
import Description from './components/Description'; 
import Translation from './components/Translation'; 
import { FlipCard } from './components/FlipCard';
import { NewsFeed } from './components/NewsFeed';
import CardSection from './components/CardSection';
import FooterSection from './components/FooterSection';


export default function Home() {
  return (
    <div>
      <Banner />
      <VideoBlock /> 
      <Description />
      <Actors />
      <Translation />
      <TracksSection />
      <NewsFeed />
      <CardSection />
      <FlipCard />
      <FooterSection />
    </div>
  );
}
