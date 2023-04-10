import Image from "next/image";
import Logo from "../../public/logo-tech.svg";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer-wrap">
      <section className="footer-logo">
        <Image src={Logo} alt="Tech Digital" width={200} />
      </section>
      <section className="bottom-info">
        <a href="tel:+923045398797">(+92)3045398797</a>
        <p>{year} &copy; Tech Digital all rights reserved.</p>
        <a href="mailto:techdigital.media@gmail.com">
          techdigital.media@gmail.com
        </a>
      </section>
    </footer>
  );
}

export default Footer;
