import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PaymentIcon from "@mui/icons-material/Payment";
import StorageIcon from "@mui/icons-material/Storage";

import "./styles.scss";

// Tabbed component for all, frontend, backend, database, misc
//comfortable with and exposed to categories for each
export default function Skills() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);

  const addVisibility = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(addVisibility, {});
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  useEffect(() => {
    if (isVisible && !count) {
      setCount(1);
    } else if (isVisible && count) {
      setAnimationTriggered(true);
    }
  }, [isVisible]);

  return (
    <Element name="skills">
      <section id="skills" ref={sectionRef}>
        <h3>Technical Skills</h3>
        <Tabs className="tabbed-component">
          <TabList className="options-container">
            <Tab
              className={tabIndex === 0 ? "option active-tab" : "option"}
              onClick={() => setTabIndex(0)}
            >
              <h4>All</h4>
            </Tab>
            <Tab
              className={tabIndex === 1 ? "option active-tab" : "option"}
              onClick={() => setTabIndex(1)}
            >
              <h4>Front End</h4>
            </Tab>
            <Tab
              className={tabIndex === 2 ? "option active-tab" : "option"}
              onClick={() => setTabIndex(2)}
            >
              <h4>Back End</h4>
            </Tab>
            <Tab
              className={tabIndex === 3 ? "option active-tab" : "option"}
              onClick={() => setTabIndex(3)}
            >
              <h4>Databases</h4>
            </Tab>
            <Tab
              className={tabIndex === 4 ? "option active-tab" : "option"}
              onClick={() => setTabIndex(4)}
            >
              <h4>Misc.</h4>
            </Tab>
          </TabList>

          <TabPanel
            className={
              isVisible && tabIndex === 0
                ? !animationTriggered
                  ? "panel panel-all animated-from-bottom"
                  : "panel"
                : "hidden"
            }
          >
            <h4>Tools I am comfortable with:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-javascript-plain image"></i>
                </div>
                <h6>Javascript</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-react-original image"></i>
                </div>
                <h6>React</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-sass-original image"></i>
                </div>
                <h6>SaSS</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-css3-plain image"></i>
                </div>
                <h6>CSS3</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-html5-plain image"></i>
                </div>
                <h6>HTML5</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-nodejs-plain image"></i>
                </div>
                <h6>Node</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-mongodb-plain image"></i>
                </div>
                <h6>MongoDB</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/router.jfif")}
                    alt="React Router"
                  />
                </div>
                <h6>React Router</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-redux-original image"></i>
                </div>
                <h6>Redux</h6>
              </div>

              <div className="skill-container">
                <div className="image">
                  <i className="devicon-express-original image"></i>
                </div>
                <h6>ExpressJs</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-java-plain image"></i>
                </div>
                <h6>Java</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/restapi.jfif")}
                    alt="Rest Apis"
                  />
                </div>
                <h6>Restful Apis</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-github-original image"></i>
                </div>
                <h6>Github</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-vscode-plain image"></i>
                </div>
                <h6>vscode</h6>
              </div>

              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/terminal.png")}
                    alt="Terminal Logo"
                  />
                </div>
                <h6>Command Line</h6>
              </div>
            </div>
            <h4>Tools I have been exposed to:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-materialui-plain image"></i>
                </div>
                <h6>Material UI</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-dot-net-plain image"></i>
                </div>
                <h6>dot-net</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-php-plain image"></i>
                </div>
                <h6>PHP</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-mysql-plain image"></i>
                </div>
                <h6>MySql</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/paypal.png")}
                    alt="Paypal Logo"
                  />
                </div>
                <h6>Paypal</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-firebase-plain image"></i>
                </div>
                <h6>Firebase</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-wordpress-plain image"></i>
                </div>
                <h6>Wordpress</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-csharp-plain image"></i>
                </div>
                <h6>C#</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-photoshop-plain image"></i>
                </div>
                <h6>Photoshop</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/agile.png")}
                    alt="Agile Methodology"
                  />
                </div>
                <h6>Agile</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-slack-plain image"></i>
                </div>
                <h6>Slack</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-swift-plain image"></i>
                </div>
                <h6>Swift</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-tailwindcss-plain image"></i>
                </div>
                <h6>tailwindcss</h6>
              </div>

              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/dataStructures.jfif")}
                    alt="Data Structures"
                  />
                </div>
                <h6>Data Structures</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <PaymentIcon fontSize="medium" className="image" />
                </div>
                <h6>Stripe</h6>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className={tabIndex === 1 ? "panel panel-frontend" : "hidden"}
          >
            <h4>Tools I am comfortable with:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-javascript-plain image"></i>
                </div>
                <h6>Javascript</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-react-original image"></i>
                </div>
                <h6>React</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-sass-original image"></i>
                </div>
                <h6>SaSS</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-css3-plain image"></i>
                </div>
                <h6>CSS3</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-html5-plain image"></i>
                </div>
                <h6>HTML5</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/router.jfif")}
                    alt="React Router"
                  />
                </div>
                <h6>React Router</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-redux-original image"></i>
                </div>
                <h6>Redux</h6>
              </div>
            </div>
            <h4>Tools I have been exposed to:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-materialui-plain image"></i>
                </div>
                <h6>Material UI</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-tailwindcss-plain image"></i>
                </div>
                <h6>tailwindcss</h6>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className={tabIndex === 2 ? "panel panel-backend" : "hidden"}
          >
            <h4>Tools I am comfortable with:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-nodejs-plain image"></i>
                </div>
                <h6>Node</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-express-original image"></i>
                </div>
                <h6>ExpressJs</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-java-plain image"></i>
                </div>
                <h6>Java</h6>
              </div>
            </div>
            <h4>Tools I have been exposed to:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-dot-net-plain image"></i>
                </div>
                <h6>dot-net</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-php-plain image"></i>
                </div>
                <h6>PHP</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-firebase-plain image"></i>
                </div>
                <h6>Firebase</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-csharp-plain image"></i>
                </div>
                <h6>C#</h6>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className={tabIndex === 3 ? "panel panel-database" : "hidden"}
          >
            <h4>Tools I am comfortable with:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-mongodb-plain image"></i>
                </div>
                <h6>MongoDB</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <StorageIcon fontSize="medium" className="image" />
                </div>
                <h6>Sql</h6>
              </div>
            </div>
            <h4>Tools I have been exposed to:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-mysql-plain image"></i>
                </div>
                <h6>MySql</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-firebase-plain image"></i>
                </div>
                <h6>Firebase</h6>
              </div>
            </div>
          </TabPanel>
          <TabPanel className={tabIndex === 4 ? "panel panel-misc" : "hidden"}>
            <h4>Tools I am comfortable with:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-git-plain image"></i>
                </div>
                <h6>git</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/restapi.jfif")}
                    alt="Rest Apis"
                  />
                </div>
                <h6>Restful Apis</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-github-original image"></i>
                </div>
                <h6>Github</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-vscode-plain image"></i>
                </div>
                <h6>vscode</h6>
              </div>

              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/terminal.png")}
                    alt="Terminal Logo"
                  />
                </div>
                <h6>Command Line</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/mvc.jfif")}
                    alt="MVC architecture"
                  />
                </div>
                <h6>MVC</h6>
              </div>
              <div className="skill-container">
                <i className="devicon-heroku-original image"></i>
                <h6>Heroku</h6>
              </div>
            </div>
            <h4>Tools I have been exposed to:</h4>
            <div className="skills-container">
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-wordpress-plain image"></i>
                </div>
                <h6>Wordpress</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-photoshop-plain image"></i>
                </div>
                <h6>Photoshop</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/agile.png")}
                    alt="Agile Methodology"
                  />
                </div>
                <h6>Agile</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-slack-plain image"></i>
                </div>
                <h6>Slack</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-swift-plain image"></i>
                </div>
                <h6>Swift</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/paypal.png")}
                    alt="Paypal Logo"
                  />
                </div>
                <h6>Paypal</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <i className="devicon-firebase-plain image"></i>
                </div>
                <h6>Firebase</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/dataStructures.jfif")}
                    alt="Data Structures"
                  />
                </div>
                <h6>Data Structures</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <PaymentIcon fontSize="medium" className="image" />
                </div>
                <h6>Stripe</h6>
              </div>
              <div className="skill-container">
                <div className="image">
                  <img
                    className="image"
                    src={require("../../images/devcycle.jfif")}
                    alt="Development Lifecycle"
                  />
                </div>
                <h6>Dev Lifecycle</h6>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </Element>
  );
}
