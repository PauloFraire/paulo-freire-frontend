import React, { Fragment } from 'react';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import News from '../components/home/News';
import ContactForm from '../components/home/ContactForm';
import DigitalLibrary from '../components/home/DigitalLibrary';
import Galery from '../components/home/Galery';
import History from '../components/home/History';
import Inscripciones from '../components/home/Inscripciones';
import PromotionalVideo from '../components/home/PromotionalVideo';
import DiplomadoInformation from '../components/home/DiplomadoInformation';

const Home = () => {


  return (
    <Fragment >
      <Hero />
      <PromotionalVideo />
      {/* <Inscripciones /> */}
      <DiplomadoInformation />
      <Welcome />
      <News />
      {/* <Galery /> */}
      <History />
      <DigitalLibrary />
      <ContactForm />

    </Fragment>
  )
}

export default Home