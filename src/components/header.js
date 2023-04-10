import Image from "next/image";
import Dots from "../../public/dot.png";
import PlayBtn from "../../public/play-btn.png";
import BGMain from "../../public/bg-head.jpg";
import BGMain2 from "../../public/bg-head-2.png";
import { motion } from "framer-motion";

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
      <section className="header-top">
        <div className="header-info">
          <div className="dots-wrap">
            <Image src={Dots} width={20} />
            <Image src={Dots} width={20} />
          </div>
          <h1 className="heading">Digitize</h1>
        </div>
        <div className="video-thumbnail">
          <div className="video-img">
            <Image src={PlayBtn} width={320} />
          </div>
        </div>
      </section>
      <section className="header-bottom">
        <div className="info-h-2">
          <h1 className="heading">Ideas</h1>
        </div>
        <div className="para">
          <p>
            The art of visual communication, creatively impacing the world
            around us -- one good design at a time, design like you mean it!
          </p>
        </div>
      </section>
      <section className="header-button-wrap">
        <a href="#services">View Services</a>
        <a href="#contact">Contact Us</a>
        <div className="line-through"></div>
      </section>
      <section className="main-head-img">
        <section
          className="image-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Image src={BGMain2} />
        </section>
      </section>
    </motion.header>
  );
}

export default Header;
