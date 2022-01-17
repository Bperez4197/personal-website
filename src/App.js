import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <footer>
        <p>Don't steal my site dude.</p>
        <div className="icons">
          <a href="https://github.com/Bperez4197" target="_blank">
            <GitHubIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a href="#">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="#">
            <EmailIcon fontSize="large" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
