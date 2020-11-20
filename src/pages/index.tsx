import Header from "../components/Header";

import logo from '../assets/logo-jl.svg';
import house from '../assets/house.svg';
import house2 from '../assets/house2.svg';
import propertie from '../assets/propertie1.svg';
import Carousel from '../components/Carousel';

import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />

      <section className='header-image-section'>
        <Image src={logo} alt="logoBackground" width='400' height='400' />
      </section>

      <section className='projects-section'>
        <h3>Projetos na planta</h3>
        <ul>
          <li>
            <Image src={house} alt="carousel" width="1280" height='700' />
            <p>Imovel1</p>
            <p>R$ 100,000,00</p>
          </li>
        </ul>
        <button>Ver Todos</button>
      </section>

      <section className="galery-carousel-section">
        <h3>Galeria de fotos</h3>
        {/* <Image src={house2} alt="galery carousel" width='100%' height='400' /> */}
        <Carousel />
      </section>

      <section className="properties-section">
        <ul>
          <li>
            <Image src={propertie} alt="properties" height='250' width='100%' />
            <strong>lorem lorem lorem lorem</strong>
            <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Molestiae praesentium
            ratione beatae animi delectus quidem earum,
            voluptatibus explicabo vitae, omnis hic, doloribus i !</p>
            <button>Ler mais</button>
          </li>
        </ul>
      </section>

      <section className="footer-section">
        <div className="location-container">
          <div className="location-content">
            <p>
              Jlemann - corretora
            </p>

            <p>
              150 Elgin Street Ottawa
              Ontario CA K2P 1L4
            </p>

            <p>
              Estamos sempre aberto, 24 horas por dia 7 dias por semana
            </p>
          </div>
        </div>

        <div className='footer-container'>
          <ul className="links-container">
            <li>Home</li>
            <li>Modelos de casas</li>
            <li>Projetos</li>
            <li>Contatos</li>
          </ul>

          <div className="newsletter-container">
            <p>Fique por dentro das novidades</p>
            <div>
              <input type="text" placeholder='Digite seu melhor e-mail' />
              <button>Inscrever</button>
            </div>
          </div>

          <hr />

          <div className="last-footer-container">
            <div className="payments-container">
              <h3>Master card</h3>
            </div>

            <div className='credits-container'>
              <div className="social-media">
                instagram, facebook
              </div>
              <strong>© 2020, Made with ♥ by Willian Lemann</strong>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
};

export default Home;
