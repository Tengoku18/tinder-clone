import Head from "next/head";
import Header from "../components/Header";
import TinderCards from "../components/TinderCards";
import SwipeButtons from "../components/SwipeButtons";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Fetching from "../components/Fetching";

export default function Home() {
  return (
    <div className="md:mx-32">
      {/* <Fetching /> */}
      <Header />

      <TinderCards />

      <SwipeButtons />
    </div>
  );
}
