import Image from 'next/image';
import React from 'react';

import house from '../../assets/house.svg';
import { FiMapPin, } from 'react-icons/fi';
import { FaBed, FaCar } from 'react-icons/fa';
import styles from './index.module.scss';

const Projects: React.FC = () => {
   return (
      <section className={styles.projectsSection}>
         <h3>Projetos na planta</h3>
         <ul>
            <li>
               <Image src={house} alt="carousel" width="1280" height='1280' />
               <div className={styles.projectsContentContainer}>
                  <strong>Gerrard plaza</strong>
                  <div className={styles.iconsContainer}>
                     <FiMapPin size={24} className={styles.icon} />
                     <span>Porto Alegre</span>
                  </div>
                  <div className={styles.iconsContainer}>
                     <FaBed size={24} className={styles.icon} />
                     <span>4 dorm. | 291 e 525 m²</span>
                  </div>
                  <div className={styles.iconsContainer}>
                     <FaCar size={24} className={styles.icon} />
                     <span>4 ou 5 vagas</span>
                  </div>
               </div>
            </li>

            <li>
               <Image src={house} alt="carousel" width="1280" height='1280' />
               <div className={styles.projectsContentContainer}>
                  <strong>Gerrard plaza</strong>
                  <div className={styles.iconsContainer}>
                     <FiMapPin size={24} className={styles.icon} />
                     <span>Porto Alegre</span>
                  </div>
                  <div className={styles.iconsContainer}>
                     <FaBed size={24} className={styles.icon} />
                     <span>4 dorm. | 291 e 525 m²</span>
                  </div>
                  <div className={styles.iconsContainer}>
                     <FaCar size={24} className={styles.icon} />
                     <span>4 ou 5 vagas</span>
                  </div>
               </div>
            </li>

            <li>
               <Image src={house} alt="carousel" width="1280" height='1280' />
               <div className={styles.projectsContentContainer}>
                  <strong>Gerrard plaza</strong>
                  <div className={styles.iconsContainer}>
                     <FiMapPin size={24} className={styles.icon} />
                     <span>Porto Alegre</span>
                  </div>
                  <div className={styles.iconsContainer}>
                     <FaBed size={24} className={styles.icon} />
                     <span>4 dorm. | 291 e 525 m²</span>
                  </div>
                  <div className={styles.iconsContainer}>
                     <FaCar size={24} className={styles.icon} />
                     <span>4 ou 5 vagas</span>
                  </div>
               </div>
            </li>
         </ul>
         <button>Ver Todos</button>
      </section>
   );
}

export default Projects;