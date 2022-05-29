import type { NextPage } from "next";
import { client } from "../lib/sanity";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home: NextPage = ({ experiences, services, works }: any) => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services services={services} />
      <Experience experiences={experiences} />
      <Work works={works} />
      <Footer />
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

  const queryWorks = `*[_type == "works"] | order(buildedAt desc) {
    title,
    description,
    projectLink,
    codeLink,
    featured,
    imageUrl,
    tags[],
  }`;

  const services = await client.fetch(queryServices);
  const experiences = await client.fetch(queryExperiences);
  const works = await client.fetch(queryWorks);

  return {
    props: { experiences, services, works },
  };
};
