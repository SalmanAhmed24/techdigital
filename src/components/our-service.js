import React, { useState, useEffect, use } from "react";
import { serviceData } from "../../utils/contantValues";
import InnerService from "./subComponent/innerService";
import { motion } from "framer-motion";
import Link from "next/link";
function OurServicesComp() {
  const [activeSer, setActiveSer] = useState("01");
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
    <section id="services" className="our-services-comp">
      <div className="tilted-heading-wrap">
        <h1 className="titlted-heaading">
          Our Services <span>.</span>
        </h1>
      </div>
      <section className="info-wrap">
        <div className="text-wrap">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className="main-head"
          >
            We Offer Several Services for you<span>.</span>
          </motion.h1>
        </div>
        <div className="service-comp-link-wrap">
          <motion.p
            initial={{ opacity: 0, y: 100, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9 }}
          >
            Every one of us loves something different. So, explore the world
            through the lens of our visual capabilities, and find what you love.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            className="service-comp-btn-wrap"
          >
            <Link href={"/service"} className="service-comp-btn">
              Explore Services &#10140;
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="all-services">
        <section className="services-heading">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            className={
              activeSer == "01" ? "active-ser ser-main-con" : "ser-main-con"
            }
            onClick={() => setActiveSer("01")}
          >
            <h2>01</h2>
            <h1>UI/UX Designing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos cum mollitia odio dolore eaque! Earum adipisci
            </p>
          </motion.div>
          <motion.div
            className={
              activeSer == "02" ? "active-ser ser-main-con" : "ser-main-con"
            }
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            onClick={() => setActiveSer("02")}
          >
            <h2>02</h2>
            <h1>Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos cum mollitia odio dolore eaque! Earum adipisci
            </p>
          </motion.div>
          <motion.div
            className={
              activeSer == "03" ? "active-ser ser-main-con" : "ser-main-con"
            }
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            onClick={() => setActiveSer("03")}
          >
            <h2>03</h2>
            <h1>App Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos cum mollitia odio dolore eaque! Earum adipisci
            </p>
          </motion.div>
          <motion.div
            className={
              activeSer == "04" ? "active-ser ser-main-con" : "ser-main-con"
            }
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            onClick={() => setActiveSer("04")}
          >
            <h2>04</h2>
            <h1>Digital Marketing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos cum mollitia odio dolore eaque! Earum adipisci
            </p>
          </motion.div>
        </section>
        <section>
          {activeSer == "01" ? <p>UI/UX</p> : null}
          {activeSer == "02" ? <p>Web</p> : null}
          {activeSer == "03" ? <p>App</p> : null}
          {activeSer == "04" ? <p>DM</p> : null}
        </section>
      </section>
    </section>
  );
}

export default OurServicesComp;
