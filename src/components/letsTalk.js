import { motion } from "framer-motion";
function LetsTalk() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1.2 }}
      id="contact"
      className="main-wrap-talk"
    >
      <section className="letsTalk-wrap">
        <h1>Let's discuss your ideas</h1>
        <div className="line"></div>
        <div className="contact-btn-wrap">
          <button>Contact US</button>
          <button>Follow US</button>
        </div>
      </section>
    </motion.section>
  );
}

export default LetsTalk;
