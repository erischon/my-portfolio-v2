import type { NextPage } from "next";
import { client } from "../lib/sanity";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Work from "../components/Work";

const Home: NextPage = ({ experiences, services }: any) => {
  return (
    <div>
      <Header />
      <Hero />
      <About services={services} />
      <Experience experiences={experiences} />
      <Work />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryExperiences = `*[_type == "experiences"] {
    company,
    position,
    period,
    desc[],
  }`;

  const queryServices = `*[_type == "services"] {
    title,
    description,
    icon,
  }`;

  const services = await client.fetch(queryServices);
  const experiences = await client.fetch(queryExperiences);

  return {
    props: { experiences, services },
  };
};
