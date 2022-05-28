import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";

import iconFolder from "../public/images/streamlinehq-folder-open-files-folders-48.png";
import iconGit from "../public/images/streamlinehq-developers-comunities-git-logos-48.png";
import iconLink from "../public/images/streamlinehq-link-hyperlink-chain-interface-essential-48.png";

const Work = ({ works }: any) => {
  console.log(works);

  return (
    <section className="section" id="Work">
      <div className="container__header">
        <h2>Work</h2>
      </div>
      <div className="works__container">
        <div className="work__icon">
          <Image src={iconFolder} alt="" width={30} height={30} />
          <div>
            <Image src={iconGit} alt="" width={30} height={30} />
            <Image src={iconLink} alt="" width={30} height={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
