import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { MdOutlineFileDownload } from "react-icons/md";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shivam Yadav</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3 years of experience using MERN stack. Reach out if you'd like to learn more!
        </p>
        <div className={styles.contactResume}>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>

        <a href="../../Shivam-Resume.pdf" className={styles.aDowntag} download="Shivam_Yadav_Resume.pdf">
      <div className={styles.resumeBtn}>
        <div>Resume</div>
        <div className={styles.downBtn}>
          <MdOutlineFileDownload />
        </div>
      </div>
    </a>

        </div>
      </div>
      <img
        src={getImageUrl("hero/homeImg.png")}
        alt="Hero image of me"
        className={styles.homeImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
