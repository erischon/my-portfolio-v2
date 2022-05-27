import type { NextPage } from "next";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
    </div>
  );
};

export default Home;
