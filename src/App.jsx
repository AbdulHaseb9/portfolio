import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Expertise } from "./components/Expertise";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Projects />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
