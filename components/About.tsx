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
            Je suis un Développeur Web Full Stack Freelance ayant une expertise
            en création, modification et entretien d&apos;applications Web.
          </p>

          <div className="skills__container">
            <p>En ce moment je travaille plutôt avec:</p>
            <div className="skills__box">
              <div className="skills__list">
                <ul>
                  <li>HTML</li>
                  <li>SaSS</li>
                  <li>Typescript</li>
                </ul>
              </div>
              <div className="skills__list">
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Sanity</li>
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
