import Image from "next/image";
import React from "react";

import iconGit from "../public/images/iconGit.png";
import iconLink from "../public/images/iconLink.png";
import Featured from "./Featured";

const Work = ({ works, featured }: any) => {
  return (
    <section className="section" id="Work">
      <div className="container__header">
        <h2>Work</h2>
      </div>

      <Featured featured={featured} />

      <div className="works__container">
        {works.map((work: any, index: any) => (
          <div key={index} className="work__card">
            <div>
              <div className="work__title">
                <h3>{work.title}</h3>
                <div className="work__title-icons">
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <div className="work__icon">
                      <Image src={iconGit} alt="" width={26} height={26} />
                    </div>
                  </a>
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <div className="work__icon">
                      <Image src={iconLink} alt="" width={26} height={26} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="work__desc">
                <p>{work.description}</p>
              </div>
            </div>
            <div className="work__tags">
              {work.tags.map((tag: any, index: any) => (
                <div key={index} className="work__tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
