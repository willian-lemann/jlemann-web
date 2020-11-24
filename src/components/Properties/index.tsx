import Image from 'next/image';
import React from 'react';

import propertie from '../../assets/propertie1.svg';

import styles from './index.module.scss';

const Properties: React.FC = () => {
   return (
      <section className={styles.propertiesSection}>
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
            <li>
               <Image src={propertie} alt="properties" height='250' width='100%' />
               <strong>lorem lorem lorem lorem</strong>
               <p>Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Molestiae praesentium
               ratione beatae animi delectus quidem earum,
       voluptatibus explicabo vitae, omnis hic, doloribus i !</p>
               <button>Ler mais</button>
            </li>
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
   );
}

export default Properties;