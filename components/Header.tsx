import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

import logo from "../public/images/logo-fff-es.png";

const Header = () => {
  const menuLink = ["About", "Services", "Experience", "Work"];

  const [toggle, setToggle] = useState(false);

  return (
    <header className="">
      <div className="header__logo">
        <Image src={logo} alt="Eri Schön's Logo" />
      </div>
      <nav className="navbar">
        <ul className="navbar__links">
          {menuLink.map((item) => (
            <li key={`link-${item}`} className="navbar__link">
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__menu">
          <RiMenu5Fill onClick={() => setToggle(true)} />

          {toggle && (
            <div className="menu__container">
              <IoClose onClick={() => setToggle(false)} />
              <ul>
                {menuLink.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="social__container">
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
    </header>
  );
};

export default Header;
