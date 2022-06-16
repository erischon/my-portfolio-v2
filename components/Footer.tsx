import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <span className="footer__copy">
        &copy; 2022-{new Date().getFullYear()} Eri Schön All rights reserved
      </span>

      <div className="social__container--footer">
        <a
          href="https://twitter.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/ericschonhofen/"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
      </div>
    </section>
  );
};

export default Footer;
