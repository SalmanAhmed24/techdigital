import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
function AboutUsComp() {
  return (
    <motion.section
      className="about-us-comp-wrap"
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1.2 }}
    >
      <div className="tilted-heading-wrap">
        <h1 className="titlted-heaading">
          About Us <span>.</span>
        </h1>
      </div>
      <p className="para-main">
        Presenting superior services through <span>innovative concepts</span>{" "}
        that dare to be different
      </p>
      <div className="about-line"></div>
      <div className="know-more-wrap">
        <p>
          Our team of experts consists of web developers, UI/UX designers,
          digital marketers and other creative professionals who are passionate
          about creating amazing digital experiences.
        </p>
        <Link href={"/about"} className="know-more-btn">
          Know More &#10140;
        </Link>
      </div>
    </motion.section>
  );
}

export default AboutUsComp;
