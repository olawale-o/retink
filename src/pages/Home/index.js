import React from 'react';
import { useQuery } from 'react-query';
import { collection, getDocs } from "firebase/firestore";
import './style.css';
import { store } from '../../firebase-config';

import character from '../../assets/character.png';
import { Hat } from '../../components/Svg';
const getServices = async () => {
  const docs = [];
  const querySnapshot = await getDocs(collection(store, "retink_services"));
  querySnapshot.forEach((doc) => {
    docs.push({...doc.data(), id: doc.id });
  });
  return docs;
};

const Home = () => {
  const { isLoading, data } = useQuery('services', getServices);

  return (
    <div className="home">
      <div className="hero__container">
        <div className="hero">
          <div className="hero__left">
            <h6 className="hero__title">What are you looking for?</h6>
            <div className="card">
              <div className="svg">
                <Hat />
              </div>
              <h2 className="card__title">Help me create a Marketing Plan!</h2>
              <p className="card__text">The Arctic ocean freezes every winter and much of the see ice then thaws every summer</p>
            </div>
            <div className="card">
              <div className="svg">
                <Hat />
              </div>
              <h2 className="card__title">I know what i am looking for.</h2>
              <p className="card__text">The Arctic ocean freezes every winter and much of the see ice then thaws every summer</p>
            </div>
          </div>
          <div className="hero__right">
            <div className="lg__card">
              <p className="card__text">
                Hi there! Need help in creating a Marketing plan for your business? I can help you to create one using Retink AI engine.
              </p>
            </div>
            <div className="sm__card">
              <p className="card__text">
                Click on the options to get started
              </p>
            </div>
          </div>
        </div>
        <img src={character} alt="character" className="hero__img" />
      </div>

      <div className="services">
        <div className="container">
          <h1 className="service__title">Our Services</h1>
          <ul className="service__cards">
            {isLoading && <div className="loading" />}
            {data && data.map((service) => (
              <li className="service__card" key={service.id}>
                <div className="img__box">
                  <img src={service.img_url} alt={service.name} />
                </div>
                <h6>{service.name}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;