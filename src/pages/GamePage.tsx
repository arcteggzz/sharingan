import React, { useState } from "react";
import Footer from "../components/Footer";
import styles from "./GamePage.module.scss";
import ronaldo from "../assets/images/ronaldo.jpg";
import messi from "../assets/images/messi.png";
import mbappe from "../assets/images/mbappe.jpg";
import neymar from "../assets/images/neymar.jpg";

interface Props {}

type imgSRCs = {
  path: string;
  ishighlighted: boolean;
};

type themeDetail = {
  themeID: number;
  imageSRCs: imgSRCs[];
};

function GamePage(props: Props) {
  const {} = props;
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [timeSpentText, setTimeSpentText] = useState<string | undefined>(
    "00 : 00"
  );
  const [level, setLevel] = useState<number>(0);
  const [computerMoves, setComputerMoves] = useState<number[]>([]);

  const themeDetails: themeDetail[] = [
    {
      themeID: 0,
      imageSRCs: [
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
        {
          path: mbappe,
          ishighlighted: false,
        },
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
      ],
    },
    {
      themeID: 1,
      imageSRCs: [
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
        {
          path: mbappe,
          ishighlighted: false,
        },
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
      ],
    },
    {
      themeID: 2,
      imageSRCs: [
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
        {
          path: mbappe,
          ishighlighted: false,
        },
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
      ],
    },
    {
      themeID: 3,
      imageSRCs: [
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
        {
          path: mbappe,
          ishighlighted: false,
        },
        {
          path: messi,
          ishighlighted: false,
        },
        {
          path: ronaldo,
          ishighlighted: false,
        },
        {
          path: neymar,
          ishighlighted: false,
        },
      ],
    },
  ];

  const gameTimeHandler = () => {
    let startTime = 0;
    setInterval(() => {
      startTime++;
      setTimeSpentText(timeFormatter(startTime));
    }, 1000);
  };

  const startGame = () => {
    setGameActive(true);
    setTimeout(() => {
      gameTimeHandler();
    }, 3000);
    setLevel(1);
  };

  const timeFormatter = (num: number): string | undefined => {
    if (num === 0 || isNaN(num)) return `00:00`;
    const divisor_for_minutes = num % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);
    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);
    const formatedTime = `${minutes}:${seconds}`;
    if (formatedTime.length === 3 && minutes < 1)
      return `0${minutes}:0${seconds}`;
    if (formatedTime.length === 4) return `0${minutes}:${seconds}`;
    if (formatedTime.length === 3 && minutes > 0)
      return `0${minutes}:${seconds}0`;
  };

  return (
    <>
      <div className={styles.GamePage}>
        <section className={styles.timer}>
          <p>{`Level ${level}`}</p>
          <p>{timeSpentText}</p>
        </section>
        <section className={styles.section_container}>
          {!gameActive ? (
            <section className={styles.instruction_section}>
              <h1>when you click start, your timer starts</h1>
              <button className={styles.startButton} onClick={startGame}>
                Start Game
              </button>
            </section>
          ) : (
            <section className={styles.images_section}>
              {themeDetails[0].imageSRCs.map((image, index) => {
                return (
                  <div
                    className={
                      image.ishighlighted ? styles.icon_highlight : styles.icon
                    }
                    key={index}
                  >
                    <div
                      className={
                        image.ishighlighted
                          ? styles.imgContainer_highlight
                          : styles.imgContainer
                      }
                    >
                      <img src={image.path} alt="messi" />
                    </div>
                  </div>
                );
              })}
            </section>
          )}
        </section>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default GamePage;
