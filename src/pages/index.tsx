import Header from "../components/Header";

import logo from '../assets/logo-jl.svg';
import house from '../assets/house.svg';
import house2 from '../assets/house2.svg';
import propertie from '../assets/propertie1.svg';


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />

      <section className='header-image-section'>
        <img src={logo} alt="logoBackground" />
      </section>

      <section className='projects-section'>
        <h3>Projetos na planta</h3>
        <ul>
          <li>
            <img src={house} alt="carousel" />
            <p>Imovel1</p>
            <p>R$ 100,000,00</p>
          </li>
        </ul>
        <button>Ver Todos</button>
      </section>

      <section className="galery-carousel-section">
        <h3>Galeria de fotos</h3>
        <img src={house2} alt="galery carousel" />
      </section>

      <section className="properties-section">
        <ul>
          <li>
            <img src={propertie} alt="properties" />
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
            rua
           </div>
        </div>

        <div>

        </div>
      </section>

    </div>
  );
};

export default Home;
