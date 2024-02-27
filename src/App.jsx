import "./App.css";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Projects />
    </>
  );
}

export default App;
