import type { NextPage } from "next";

import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
