import Image from "next/image";
import Logo from "../../public/logo-tech.svg";
import { motion } from "framer-motion";
function Navbar() {
  const handleNavbar = (e) => {
    console.log(e.target.innerText);
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <nav className="top-bar">
      <motion.section
        variants={item}
        initial="hidden"
        transition={{ ease: "easeInOut", duration: 0.7 }}
        animate="visible"
        className="logo-wrap"
      >
        <Image src={Logo} alt="TechDigital.media" width={170} height={67} />
      </motion.section>
      <section className="links-wrap">
        <motion.ul
          onClick={handleNavbar}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li
            variants={item}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            About Us
          </motion.li>
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 1.1 }}
          >
            Project
          </motion.li>
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 1.2 }}
          >
            Service
          </motion.li>
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 1.3 }}
          >
            Let&apos;s Talk
          </motion.li>
        </motion.ul>
      </section>
    </nav>
  );
}

export default Navbar;
