import React from "react";
import experience from "../data/experience";

const Experience = () => {
  return (
    <section className="experience" id="Experience">
      {experience.map((job, index) => (
        <div key={index}>{job.nom}</div>
      ))}
    </section>
  );
};

export default Experience;
