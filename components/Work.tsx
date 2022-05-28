import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";
import { GiStoneCrafting } from "react-icons/gi";

import me from "../public/images/erischon_a.png";

const Work = ({ services }: any) => {
  console.log(services);

  const icon = React.createElement(GiStoneCrafting, {});

  return (
    <section className="section" id="Work">
      <div className="container__header">
        <h2>Work</h2>
      </div>
      <div className="about_container"></div>
    </section>
  );
};

export default Work;
