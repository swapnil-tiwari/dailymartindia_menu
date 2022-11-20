import React from "react";
import styles from "./footer.module.css";
import footer_icon from "./footer_icon.png";
function Footer() {
  return (
    <div className={styles.footer_cont}>
      <div className={styles.footer_icon}>
        <img src={footer_icon}></img>
      </div>
    </div>
  );
}

export default Footer;
