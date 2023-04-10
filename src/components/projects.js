import React, { useState, useEffect, use } from "react";
import { serviceData } from "../../utils/contantValues";
import { motion } from "framer-motion";
import InnerService from "./subComponent/innerService";
function Projects() {
  const [activeSer, setActiveSer] = useState("design");
  const [data, setData] = useState();
  useEffect(() => {
    const filteredData = serviceData.find((i) => i.name == "design");
    setData(filteredData);
  }, []);
  const handleLinks = (e) => {
    const serData = serviceData.find(
      (i) => i.name == e.target.innerText.toLowerCase()
    );
    if (serData !== undefined) {
      console.log(e.target.innerText.toLowerCase());
      setActiveSer(e.target.innerText.toLowerCase());
      setData(serData);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1.2 }}
      className="projects-wrap"
    >
      <section className="head-btn-wrap">
        <h1 className="main-head">
          Our Projects<span>.</span>
        </h1>
        <div className="proj-btn-wrap">
          <ul className="links" onClick={handleLinks}>
            <li className={activeSer == "design" ? "activeLink" : "link"}>
              Design
            </li>
            <li className={activeSer == "development" ? "activeLink" : "link"}>
              Development
            </li>
            <li
              className={
                activeSer == "digital marketing" ? "activeLink" : "link"
              }
            >
              Digital Marketing
            </li>
          </ul>
        </div>
      </section>
      <section className="portfolio-img-wrap">
        {data && data.portfolioImg
          ? data.portfolioImg.map((i) => (
              <div className="image-box" key={i}>
                <img className="img-port" src={i} />
                <div className="over-lay">
                  <button>View Project</button>
                </div>
              </div>
            ))
          : null}
      </section>
    </motion.section>
  );
}

export default Projects;
