import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";

const Contacts = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__text_container">
        <h3>get in touch!</h3>
        <h1>Thank you for your interest</h1>

        <h1>
          If you have any question or need further information, Please
          don&rsquo;t hesitate to contact me.
        </h1>
      </div>
      <div className="contact__links">
        <a className="contact__link" href="mailto:weiling.chen.dev@gmail.com">
          <p>weiling.chen.dev@gmail.com</p>
        </a>
        <a className="contact__link" href="tel:+886976605506">
          <p>+886-976-605-506</p>
        </a>
      </div>
      <div className="contact__social-links">
        <a
          className="contact__social-link"
          target="_blank"
          href="https://github.com/weiling-chen-dev?tab=repositories"
        >
          <AiFillGithub className="icon" />
        </a>
        <a
          className="contact__social-link"
          target="_blank"
          href="https://www.behance.net/emmachen27"
        >
          <AiOutlineBehance className="icon" />
        </a>
        <a
          className="contact__social-link"
          target="_blank"
          href="https://www.instagram.com/wldoodle/"
        >
          <AiOutlineInstagram className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
