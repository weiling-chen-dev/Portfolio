import React, { useCallback, useEffect, useState } from "react";
import { BiConversation } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";
import { SiAzuredataexplorer } from "react-icons/si";

const Personality = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [intersectionRatio, setIntersectionRatio] = useState([0, 0, 0]);

  useEffect(() => {
    const handleScroll = (event) => {
      const allPersonalities = document.querySelectorAll(".personality");

      const observer = new IntersectionObserver(
        (entries) => {
          const radio = entries.map((e, i) => {
            return e.intersectionRatio.toFixed(2);
          });

          setIntersectionRatio(radio);
        },
        { threshold: 0.6 }
      );

      allPersonalities.forEach((p) => {
        observer.observe(p);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="personalities">
      <div className="personalities">
        <article
          className="personality"
          style={{
            transform: `translate(${
              intersectionRatio[0] <= 0.6 ? 60 - intersectionRatio[0] * 100 : 0
            }%,0%)`,
          }}
        >
          <span className="icon">
            <BiConversation />
          </span>
          <div className="text-container">
            <h3>Developing Effective Communication and Open-Mindedness</h3>
            <p>
              When it comes to communication, I possess the ability to listen
              attentively and engage in meaningful discussions with others. I
              genuinely value the exchange of ideas and willingly share my own
              thoughts while being open to receiving feedback. I firmly believe
              that this continuous process of sharing and receiving input is
              essential for personal and collective growth.
            </p>
          </div>
        </article>
        <article className="personality-decoration">
          <span className="icon">
            <BiConversation />
          </span>
        </article>
      </div>
      <div className="personalities">
        <article
          className="personality"
          style={{
            transform: `translate(${
              intersectionRatio[1] <= 0.6 ? 60 - intersectionRatio[1] * 100 : 0
            }%,0%)`,
          }}
        >
          <span className="icon">
            <MdMenuBook />
          </span>
          <div className="text-container">
            <h3>Self-Motivation and Lifelong Learning</h3>
            <p>
              Ever since I made the decision to pursue a career as a software
              engineer, I have been dedicated to expanding my knowledge in
              computer science. I actively engage in online courses on platforms
              like Udemy, as well as other open courses and articles related to
              computer science. Every day after work, I immerse myself in
              learning, striving to keep pace with the knowledge and skills
              possessed by computer science students. Alongside my passion for
              coding, I have also dedicated three years to practicing yoga,
              which has become an integral part of my life.
            </p>
          </div>
        </article>
        <article className="personality-decoration">
          <span className="icon">
            <MdMenuBook />
          </span>
        </article>
      </div>
      <div className="personalities">
        <article
          className="personality"
          style={{
            transform: `translateX(${
              intersectionRatio[2] <= 0.6 ? 60 - intersectionRatio[2] * 100 : 0
            }%)`,
          }}
        >
          <span className="icon">
            <SiAzuredataexplorer />
          </span>
          <div className="text-container">
            <h3>Problem-Solving and Exploratory Nature</h3>
            <p>
              I thrive on challenges and consistently seek opportunities to push
              myself beyond my comfort zone. Whenever my online course
              instructors assign me a new project, I take the initiative to
              pause the video and tackle it independently. I am adept at
              problem-solving by meticulously reading documentation and
              conducting thorough online research to find effective solutions.
              Furthermore, my innate curiosity drives me to explore various
              subjects and fearlessly venture into the unknown.
            </p>
          </div>
        </article>
        <article className="personality-decoration">
          <span className="icon">
            <SiAzuredataexplorer />
          </span>
        </article>
      </div>
    </section>
  );
};

export default Personality;
