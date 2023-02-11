import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.scss";
import messi from "../assets/images/messi.png";
import Footer from "../components/Footer";

interface Props {}
type themeObject = {
  imageSrc: string;
  nameTag: string;
  id: number;
  active: boolean;
};

function RegisterPage(props: Props) {
  const {} = props;

  const themes: themeObject[] = [
    {
      imageSrc: "",
      nameTag: "Chess Pieces",
      id: 0,
      active: false,
    },
    {
      imageSrc: "",
      nameTag: "Football Players",
      id: 1,
      active: false,
    },
    {
      imageSrc: "",
      nameTag: "Football Clubs",
      id: 2,
      active: false,
    },
    {
      imageSrc: "",
      nameTag: "Country Flags",
      id: 3,
      active: false,
    },
  ];

  return (
    <>
      <div className={styles.register}>
        <h1>Choose your prefered theme</h1>
        <section>
          {themes.map((theme) => {
            return (
              <div
                className={styles.icon}
                key={theme.id}
                onClick={() => (themes[theme.id].active = true)}
              >
                <div className={styles.imgContainer}>
                  <img src={messi} alt="messi" />
                </div>
                <p>{theme.nameTag}</p>
              </div>
            );
          })}
        </section>
        <Link to="/game" className={styles.buttonLink}>
          Start Game
        </Link>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
