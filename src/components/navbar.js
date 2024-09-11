import Image from "next/image";
import Logo from "../../public/logo-tech.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
  const path = usePathname();
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
        <motion.ul variants={container} initial="hidden" animate="visible">
          <motion.li
            variants={item}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Link
              href={"/"}
              className={
                path == "/"
                  ? "navbar-inner-links active-navbar-inner-links"
                  : `navbar-inner-links`
              }
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Link
              href={"/about"}
              className={
                path == "/about"
                  ? "navbar-inner-links active-navbar-inner-links"
                  : `navbar-inner-links`
              }
            >
              About Us
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 1.1 }}
          >
            <Link
              href={"/projects"}
              className={
                path == "/projects"
                  ? "navbar-inner-links active-navbar-inner-links"
                  : `navbar-inner-links`
              }
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 1.2 }}
          >
            <Link
              href={"/services"}
              className={
                path == "/services"
                  ? "navbar-inner-links active-navbar-inner-links"
                  : `navbar-inner-links`
              }
            >
              Services
            </Link>
          </motion.li>
        </motion.ul>
      </section>
      <motion.section
        variants={item}
        transition={{ ease: "easeInOut", duration: 1.4 }}
        className="lets-talk-btn-wrap"
      >
        <Link href={"/contact"} className="lets-talk-btn">
          Let's Talk
        </Link>
      </motion.section>
    </nav>
  );
}

export default Navbar;
