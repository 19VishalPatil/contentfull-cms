import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentfull CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ipsum
            ipsa autem ullam in nesciunt nostrum, animi quaerat dolorem!
            Doloremque inventore aut amet? Aliquam exercitationem nam adipisci
            odio quaerat esse.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
