import React, { useEffect, useState } from "react";
import Window from "components/Window/WindowBox";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import LandingScreen from "components/LandingScreen/LandingScreen";
import { useOnIdle } from "hooks/idleTimerHooks";
import Screensaver from "components/Screensaver/Screensaver";

const Table: NextPage = () => {
  // //Screensaver
  // const showScreensaver = () => {
  //   setShowSS(false);
  //   console.log("Showing ss");
  // };
  // const hideScreensaver = () => {
  //   setShowSS(true);
  //   console.log("hiding ss");
  // };

  // useOnIdle({
  //   debounce: 500,
  //   idleTimeout: 10000,
  //   onIdle: hideScreensaver,
  //   onAction: showScreensaver,
  //   events: [
  //     "mousemove",
  //     "keydown",
  //     "wheel",
  //     "DOMMouseScroll",
  //     "mouseWheel",
  //     "mousedown",
  //     "visibilitychange",
  //     "touchmove",
  //   ],
  // });

  // const [showSS, setShowSS] = useState(false);
  // /////

  return (
    <React.StrictMode>
      {/*   <div className={styles.container}>
    <Head>
        <title>table</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        Table page
         <Window /> 
      </div>
*/}
      <div
        style={{
          background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: "0",
        }}
      ></div>
      <LandingScreen />
      {/* <Screensaver show={showSS} /> */}
    </React.StrictMode>
  );
};

export default Table;
