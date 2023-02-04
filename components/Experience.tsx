const Experience = ({ experiences }: any) => {
  return (
    <section className="section" id="Experience">
      <div className="container__header">
        <h2>Expérience</h2>
      </div>

      <div className="experience_container">
        {experiences.map((job: any, index: any) => (
          <div key={index} className="experience__card">
            <p className="card__period">{job.period}</p>

            <h3 className="card__title">
              {job.position}{" "}
              <span className="text--secondary">@ {job.company}</span>
            </h3>

            <div className="card__desc">
              {job.desc.map((description: any, index: any) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
