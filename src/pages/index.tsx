import Header from "../components/Header";

import logo from '../assets/logo-jl.svg';
import Carousel from '../components/Carousel';

import Image from 'next/image';
import Projects from "../components/Projects";
import Properties from "../components/Properties";
import Footer from "../components/Footer";
import { Element } from 'react-scroll';


const Home: React.FC = () => {
  return (
    <Element name='home' className="home-container">
      <Header>
        <section className='header-image-section'>
          <Image src={logo} alt="logoBackground" width='400' height='400' />
        </section>
      </Header>

      <Projects />

      <Carousel />

      <Properties />

      <Footer />
    </Element>
  );
};

export default Home;
