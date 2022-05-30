import type { NextPage } from "next";
import { client } from "../lib/sanity";
import Head from "next/head";

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
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Eri Schön</title>
      </Head>

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

  const queryWorks = `*[_type == "works"] | order(updatedAt desc) {
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
