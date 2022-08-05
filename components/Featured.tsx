import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";

import iconGit from "../public/images/iconGit.png";
import iconLink from "../public/images/iconLink.png";

const Featured = ({ featured }: any) => {
  return (
    <article className="featured" id="Work">
      <div className="featured__left">
        <h3 className="featured__title">{featured[0].title}</h3>

        <div className="featured__container">
          <p className="featured__desc">{featured[0].description}</p>
        </div>

        <div className="featured__tags">
          {featured[0].tags.map((tag: any, index: any) => (
            <div key={index} className="featured__tag">
              {tag}
            </div>
          ))}
        </div>

        <div className="featured__icons">
          <a href={featured[0].codeLink} target="_blank" rel="noreferrer">
            <div className="featured__icon">
              <Image src={iconGit} alt="" width={26} height={26} />
            </div>
          </a>
          <a href={featured[0].projectLink} target="_blank" rel="noreferrer">
            <div className="featured__icon">
              <Image src={iconLink} alt="" width={26} height={26} />
            </div>
          </a>
        </div>
      </div>

      <div className="featured__image-container">
        <div className="featured__image-box">
          <Image
            src={urlFor(featured[0].imgUrl).url()!}
            alt=""
            layout="fill"
            objectFit="cover"
            className="featured__image"
          />
        </div>
      </div>
    </article>
  );
};

export default Featured;
