import type {NextPage} from "next";
import Main from "./components/main";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";

const Home: NextPage = () => {
    return (
        <div>
            <Main/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    );
};

export default Home;
