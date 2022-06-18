import type { NextPage } from "next";
import Detail from "./components/detail";
import Footer from "./components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Detail />
      <Footer />
    </div>
  );
};

export default Home;
