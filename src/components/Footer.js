import React from "react";
import designerLogoWhite from "../images/designer-logo-white.png";
import designerLogoYellow from "../images/designer-logo-yellow.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">Clone For Practice</div>
      <div className="footer__content">
        Design by{" "}
        <a href="https://www.kaploom.com/" target="_blank">
          <img
            className="footer__designerLogoWhite"
            src={designerLogoWhite}
            alt="designer logo"
          />
          <img
            className="footer__designerLogoYellow"
            src={designerLogoYellow}
            alt="designer logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
