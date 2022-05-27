import { useState } from "react";
import experience from "../data/experience";

const Experience = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="experience" id="Experience">
      <div className="experience_container">
        <div className="container__left">
          <ul>
            {experience.map((job, index) => (
              <div key={index} className="">
                <li onClick={() => setToggle(!toggle)}>{job.nom}</li>
                {toggle ? <div className="box">{job.desc}</div> : ""}
              </div>
            ))}
          </ul>
        </div>
        {/* <div className="container__right"></div> */}
      </div>
    </section>
  );
};

export default Experience;
