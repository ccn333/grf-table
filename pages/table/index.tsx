import React, { useEffect, useState } from "react";
import Window from "components/Window/WindowBox";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import LandingScreen from "components/LandingScreen/LandingScreen";
import { useOnIdle } from "hooks/idleTimerHooks";
import Screensaver from "components/Overlays/Screensaver";
import IntroScreen from "components/Overlays/IntroScreen";
import EdgeText from "components/Overlays/EdgeText";
import AnimBackground from "components/Overlays/AnimBackground";

const Table: NextPage = () => {
  //Screensaver
  const hideScreensaver = () => {
    setShowSS(false);
    //console.log("hiding ss");
  };
  const showScreensaver = () => {
    setShowSS(true);
    //console.log("Showing ss");
  };

  useOnIdle({
    debounce: 500,
    idleTimeout: 300000,
    onIdle: /*showScreensaver*/ () => {
      window.location.reload();
    },
    onAction: hideScreensaver,
    events: [
      //"mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mouseWheel",
      "mousedown",
      //"visibilitychange",
      "touchmove",
    ],
  });

  const [showSS, setShowSS] = useState(true);
  /////

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <React.StrictMode>
      <Head>
        <title>table</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="preload"
          href="/graphics/menu_assets/image0.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image1.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image2.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image3.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image4.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image5.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image6.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image7.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image8.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image9.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image10.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image11.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image12.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image13.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image14.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image15.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image16.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image17.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image18.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image19.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image20.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/graphics/menu_assets/image21.png"
          as="image"
          type="image/png"
        />
        <link rel="preload" href="/gallery/new/Video1.mp4" as="video" type="video/mp4" />
      </Head>

      <AnimBackground />
      <EdgeText />
      <LandingScreen />

      <IntroScreen show={showSS} />
    </React.StrictMode>
  );
};

export default Table;
