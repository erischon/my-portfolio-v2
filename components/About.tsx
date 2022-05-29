import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";

import me from "../public/images/erischon_a.png";

const About = ({ services }: any) => {
  return (
    <section className="section" id="About">
      <div className="container__header">
        <h2>About</h2>
      </div>
      <div className="about_container">
        <div className="container__left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            reprehenderit enim quas numquam temporibus omnis necessitatibus et
            aliquid ipsam iste! Labore aperiam mollitia a ea dolores, itaque
            nihil doloribus adipisci.
          </p>
        </div>

        <div className="container__right">
          <div className="img__me">
            <Image src={me} alt="Eri Schön" />
          </div>
        </div>
      </div>

      <div className="services__container">
        {services.map((service: any, index: any) => (
          <div key={index} className="service__card">
            <div className="service__icon">
              <Image
                src={urlFor(service.icon).url()}
                alt={service.title}
                width={26}
                height={26}
              />
            </div>
            <div className="service__desc">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
