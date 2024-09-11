import Image from "next/image";
import Dots from "../../public/dot.png";
import PlayBtn from "../../public/play-btn.png";
import BGMain from "../../public/bg-head.jpg";
import BGMain2 from "../../public/bg-head-2.png";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  const container = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.header
      variants={container}
      animate="visible"
      initial="hidden"
      className="header-main"
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      <Image
        src={"/hero-image-2.png"}
        width={1200}
        height={700}
        alt=""
        className="hero-img-cus"
      />
      <section className="header-heading-wrap">
        <h1>Experience Our Expert Agency Services</h1>
        <p>
          We are a digital agency that speciliazes in building and scaling
          cutting-edge digital products for startups and industrial gaints.
        </p>
      </section>
      <section className="header-button-wrap">
        <Link href="/services">View Services</Link>
        <Link href="/contact">Contact Us</Link>
        <div className="line-through"></div>
      </section>
    </motion.header>
  );
}

export default Header;
