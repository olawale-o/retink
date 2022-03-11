import './style.css';
import character from '../../assets/character.png';
const Home = () => (
  <div className="home">
    <div className="container">
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__title">What are you looking for?</h1>
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
  </div>
);

export default Home;