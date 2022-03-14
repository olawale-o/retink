import './style.css';
import character from '../../assets/character.png';
const Home = () => (
  <div className="home">
    <div className="container">
      <div className="hero">
        <div className="hero__left">
          <h6 className="hero__title">What are you looking for?</h6>
          <div className="card">
            <div></div>
            <div className="right__card">
              <h2 className="card__title">Help me create a Marketing Plan!</h2>
              <p className="card__text">The Arctic ocean freezes every winter and much of the see ice then thaws every summer</p>
            </div>
          </div>
          <div className="card">
            <div></div>
            <div className="right__card">
              <h2 className="card__title">I know what i am looking for.</h2>
              <p className="card__text">The Arctic ocean freezes every winter and much of the see ice then thaws every summer</p>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <div className="card">
            <p className="card__text">
              Hi there! Need help in creating a Marketing plan for your business? I can help you to create one using Retink AI engine.
            </p>
          </div>
          <div className="card">
            <p className="card__text">
              Click on the options to get started
            </p>
          </div>
        </div>
      </div>
      <div className="character">
        <img src={character} alt="character" />
      </div>
    </div>

    <div className="services">
      <div className="container">
        <h1 className="service__title">Our Services</h1>
        <ul className="service__cards">
          <div className="service__card">
            <div className="img__box">
              <img src="https://retinkmedia.com/wp-content/uploads/2022/02/content-1.png" alt="digital marketing" />
            </div>
            <h6>digital marketing</h6>
          </div>
          <div className="service__card">
            <div className="img__box">
              <img src="https://img.icons8.com/dusk/344/copy.png" alt="copy writing" />
            </div>
            <h6>copy writing</h6>
          </div>
          <div className="service__card">
            <div className="img__box">
              <img src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/344/external-logo-design-art-and-design-and-photography-smashingstocks-outline-color-smashing-stocks.png" alt="graphics design" />
            </div>
            <h6>graphics design</h6>
          </div>
        </ul>
      </div>
    </div>
  </div>
);

export default Home;