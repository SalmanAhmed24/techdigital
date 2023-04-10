import React, { useState, useEffect, use } from "react";
import { serviceData } from "../../utils/contantValues";
import InnerService from "./subComponent/innerService";
import { motion } from "framer-motion";
function OurServices() {
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
    <section id="services" className="our-services">
      <section className="info-wrap">
        <div className="text-wrap">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className="main-head"
          >
            Our Service<span>.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9 }}
          >
            Every one of us loves something different. So, explore the world
            through the lens of our visual capabilities, and find what you love.
          </motion.p>
        </div>
        <div className="service-link-wrap">
          <ul className="links" onClick={handleLinks}>
            <motion.li
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={activeSer == "design" ? "activeLink" : "link"}
            >
              Design
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1.1 }}
              className={activeSer == "development" ? "activeLink" : "link"}
            >
              Development
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.2 }}
              className={
                activeSer == "digital marketing" ? "activeLink" : "link"
              }
            >
              Digital Marketing
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1.3 }}
              className={activeSer == "brand building" ? "activeLink" : "link"}
            >
              Brand Building
            </motion.li>
          </ul>
        </div>
      </section>
      {data && data.subSer ? (
        <section className="services">
          <InnerService subData={data.subSer} />
        </section>
      ) : null}
    </section>
  );
}

export default OurServices;
