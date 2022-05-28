import type { NextPage } from "next";
import { client } from "../lib/sanity";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";

const Home: NextPage = ({ experiences }: any) => {
  return (
    <div>
      <Header />
      <Hero />
      <Experience experiences={experiences} />
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

  const experiences = await client.fetch(queryExperiences);

  return {
    props: { experiences },
  };
};
