import Image from "next/image";
import { urlFor } from "../lib/sanity";

const Services = ({ services }: any) => {
  return (
    <section className="section" id="Services">
      <div className="container__header">
        <h2>Services</h2>
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

export default Services;
