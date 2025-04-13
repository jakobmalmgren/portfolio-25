import img2 from "../images/jakob.jpg";

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
