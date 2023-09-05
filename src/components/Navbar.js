import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { MdOutlineWeb } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <a href="#about" className="nav__item1">
          <div className="my-text-animation">
            <h1 className="my-scroll-text1">
              Welcome!&nbsp;&nbsp;I'm Weiling CHEN.
            </h1>
            <h1 className="my-scroll-text2">
              Welcome!&nbsp;&nbsp;I'm Weiling CHEN.
            </h1>
          </div>
          <div className="nav__content_below">
            <h3> About me </h3>

            <BiDownArrowAlt className="icon" />
          </div>
        </a>
        <a href="#projects" className="nav__item2">
          <div className="my-text-animation">
            <h3 className="my-scroll-text1">
              &nbsp;\&nbsp;View my projects&nbsp;/&nbsp;
            </h3>
            <h3 className="my-scroll-text2">
              &nbsp;\&nbsp;View my projects&nbsp;/&nbsp;
            </h3>
          </div>
          <div className="nav__content_below">
            {" "}
            <h3> projects </h3>
            <MdOutlineWeb className="icon" />
          </div>
        </a>
        <a href="#personalities" className="nav__item3">
          <div className="my-text-animation">
            <h3 className="my-scroll-text1">
              Let's get hand dirty with a lots of colors!
            </h3>
            <h3 className="my-scroll-text2">
              Let's get hand dirty with a lots of colors!
            </h3>
          </div>
          <div className="nav__content_below">
            <h3> Personality </h3>

            <RiContactsLine className="icon" />
          </div>
        </a>
        <a href="#contact" className="nav__item4">
          <div className="my-text-animation">
            <h3 className="my-scroll-text1">Let's get in touch ☺&nbsp;</h3>
            <h3 className="my-scroll-text2">Let's get in touch ☺&nbsp;</h3>
          </div>
          <div className="nav__content_below">
            {" "}
            <h3> Contact </h3>
            <GrContact className="icon" />
          </div>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
