import img2 from "../images/jakob.jpg";
import { NavLink } from "react-router-dom";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="home__info-section">
        <section className="home__info-section-wrapper">
          <p className="home__info-section__p">Fullstack Developer</p>

          <h1 className="home__info-section__header">
            Hello I´m <br /> <span className="home__span">Jakob Malmgren</span>
          </h1>

          <p className="home__info-section__p">
            Fullstack JavaScript Developer with a passion for UX/UI and the
            creation of scalable projects.
          </p>

          {/* 🔗 IKONER + CV */}
          <section className="home__icon-section__container">
            <NavLink target="_blank" to="https://github.com/jakobmalmgren">
              <LuGithub className="home__icon-section__icon" />
            </NavLink>

            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/jakob-malmgren-832062226/"
            >
              <RiLinkedinLine className="home__icon-section__icon" />
            </NavLink>

            {/* 📄 CV KNAPP */}
            {/* <NavLink
              target="_blank"
              // to="https://app.flowcv.com/resume/content"
              className="home__cv-btn"
            >
              View CV
            </NavLink> */}
            <a
              href="/images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="home__cv-btn"
            >
              View CV
            </a>
          </section>

          <section className="home__btn-section"></section>
        </section>
      </section>

      <section className="home__img-section">
        <section className="home__img-wrapper">
          <img className="home__img" src={img2} alt="profile-img" />
        </section>
      </section>
    </div>
  );
};

export default Home;
