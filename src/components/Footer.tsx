import React from "react";
import styles from "./Footer.module.scss";
interface Props {}

function Footer(props: Props) {
  const date = new Date().getFullYear();
  const {} = props;

  return (
    <>
      <div className={styles.footer}>
        <p>{`oghenetegaEsedere.com ${date}`}</p>
      </div>
    </>
  );
}

export default Footer;
