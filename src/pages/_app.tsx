import { useState } from "react";

import { Header } from "../components/header";
import { Player } from "../components/player";

import { PlayerContext, PlayerContextProvider } from "../contexts/playerContext";

import styles from "../styles/app.module.scss";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PlayerContextProvider>
      <div className={styles.appWrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
};

export default MyApp;