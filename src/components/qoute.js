import { motion } from "framer-motion";
function Quote() {
  return (
    <section className="quote-wrapper">
      <div className="inner-wrapper">
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1.2 }}
        >
          A{" "}
          <motion.span
            initial={{ opacity: 0, x: 0, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.6 }}
            className="creative"
          >
            creative mind
          </motion.span>{" "}
          knows how to do the right thing at the right place and at the right
          time
          <motion.span
            initial={{ opacity: 0, x: 0, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.6 }}
            className="dot-inner"
          >
            .
          </motion.span>
        </motion.p>
      </div>
    </section>
  );
}

export default Quote;
