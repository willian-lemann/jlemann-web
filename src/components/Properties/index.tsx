import React from 'react';

import { Element } from 'react-scroll';

import propertie from '../../assets/propertie1.svg';

import styles from './index.module.scss';

const Properties: React.FC = () => {
   return (
      <Element name='properties'>
         <section className={styles.propertiesSection}>
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
               <li>
                  <img src={propertie} alt="properties" />
                  <strong>lorem lorem lorem lorem</strong>
                  <p>Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Molestiae praesentium
                  ratione beatae animi delectus quidem earum,
                   voluptatibus explicabo vitae, omnis hic, doloribus i !</p>
                  <button>Ler mais</button>
               </li>
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
      </Element>
   );
}

export default Properties;