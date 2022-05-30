const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__title">
          <p className="hero__intro text--secondary">Bonjour, je suis</p>
          <h2>Eri Schön.</h2>
          <h1>Je fabrique des apps web.</h1>
          <p className="hero__subtitle">
            Je suis un Artisan Développeur Full Stack spécialisé dans la
            construction d&apos;application web. Je suis actuellement Freelance
            Full-Remote.
          </p>
        </div>

        <a href="mailto:erischon@gmail.com">Contactez-moi!</a>
      </div>
    </section>
  );
};

export default Hero;
