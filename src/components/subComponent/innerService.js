import ServiceDrawer from "../drawers/serviceDrawer";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
function InnerService({ subData }) {
  const [drawerFlag, setDrawerFlag] = useState(false);
  const [item, setItem] = useState({});
  const handleToggleDrawer = (item = null) => {
    if (item == null) {
      return;
    } else {
      setDrawerFlag(!drawerFlag);
      setItem(item);
    }
  };
  useEffect(() => {
    console.log("called");
  }, []);
  const container = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section
      initial="hidden"
      animate="visible"
      variants={container}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="innerService"
    >
      <section className="service-list">
        {subData.map((i) => (
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.2 }}
            key={i.id}
            className="list-item"
            onClick={() => handleToggleDrawer(i)}
          >
            <p>
              {i.name}
              <span className="dot-inner">.</span>
            </p>
            <i className="fa-solid fa-arrow-up" />
          </motion.div>
        ))}
      </section>
      {drawerFlag ? (
        <ServiceDrawer
          openFlag={drawerFlag}
          toggleDrawer={handleToggleDrawer}
          itemObj={item}
        />
      ) : null}
    </section>
  );
}

export default InnerService;
