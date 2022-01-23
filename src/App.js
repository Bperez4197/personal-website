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
        <p>&#169; This website was created and is maintained by Bryce Perez.</p>
        <div className="icons">
          <a href="https://github.com/Bperez4197" target="_blank">
            <GitHubIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a href="https://www.linkedin.com/in/bryce-perez-077164230/">
            <LinkedInIcon fontSize="large" style={{ color: "black" }} />
          </a>
          <a href="mailto:perez.bryce31@gmail.com">
            <EmailIcon fontSize="large" style={{ color: "black" }} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
