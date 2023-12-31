import styles from "../styles/Home.module.css";
import styleAnimation from "../styles/AB.module.css";
import Reveal from "react-reveal/Reveal";
import config from "react-reveal/globals";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
// import { Document, Page } from 'react-pdf';


export default function Header() {
  config({ ssrFadeout: true });
  return (
    <>
      <a className={styles.seePdf}  target="_blank" href="https://drive.google.com/file/d/1m6DtlqK__6przWJ_nNxd0jCH73HUARhk/view">Voir mon CV</a>
      <section className={styles.container}>
        <div className={styleAnimation.area}>
          <ul className={styleAnimation.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.contentLeft}>
          <Animated animationIn="fadeInUp" isVisible={true}>
            <h1 className={styles.title}>Oussama Dabachil</h1>
            <h2 className={styles.subtitle}>
              Développeur FullStack Javascript
            </h2>
          </Animated>

          <ul>
            <li><a href="#pres">Mes formations</a></li>
            <li><a href="#comp">Mes compétences</a></li>
            <li><a href='#proj'>Mes projets</a></li>
            <li><a href='#cont'>Me contacter</a></li>
          </ul>
        </div>
        <div className={styles.contentRight}>
          <Animated animationIn="fadeInRight" isVisible={true}>
            <img
              className={styles.image}
              src="/oussama2.jpeg"
              alt="React Image"
            />
          </Animated>
        </div>
      </section>
    </>
  );
}
