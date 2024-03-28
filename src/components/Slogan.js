import React from "react";
import Image from "next/image";
import styles from '../app/page.module.css';

const Slogan = ({}) => {
  return (
    <div>
      <div className={styles.interactionGrid}>
        <h2>Slogan page</h2>
        <input type="text" placeholder="Search" />
        <input type="button" value="serach" />
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <div>
          <h3>Valentina</h3>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
