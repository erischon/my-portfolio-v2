import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";

import me from "../public/images/erischon_a.png";

const About = () => {
  return (
    <section className="section" id="About">
      <div className="container__header">
        <h2>About</h2>
      </div>

      <div className="about_container">
        <div className="container__left">
          <p>
            Bonjour, je suis Eri, je suis tombé dans l’univers du Web en 1995 et
            depuis je ne l’ai pas quitté.
          </p>
          <p>
            Aujourd’hui je suis Développeur Frontend React Freelance en full
            remote.
          </p>
          <p>
            J’ai une expertise en création, modification et entretien
            d&apos;applications Web.
          </p>

          <div className="skills__container">
            <p>En ce moment je travaille plutôt avec:</p>
            <div className="skills__box">
              <div className="skills__list">
                <ul>
                  <li>HTML</li>
                  <li>Sass</li>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="skills__list">
                <ul>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="skills__list">
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container__right">
          <div className="img__me">
            <Image
              src={me}
              alt="Eri Schön"
              width={270}
              height={270}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
