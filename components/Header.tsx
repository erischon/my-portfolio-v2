import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { motion } from "framer-motion";

import logo from "../public/images/logo-fff-es.png";

const Header = () => {
  const menuLink = ["About", "Experience", "Work", "Contact"];

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
    </header>
  );
};

export default Header;
