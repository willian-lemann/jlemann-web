import React, { WheelEvent } from 'react';
import Image from 'next/image';
import { images } from '../../api/image.data';

import styles from './index.module.scss';

const Carousel: React.FC = () => {

   const HandleWheel = (event: WheelEvent<HTMLUListElement>) => {
      if (event.deltaY > 0) {
         event.currentTarget.scrollBy({ left: 300 })
      } else {
         console.log('scroll down')
      }
   }

   return (
      <div>
         <ul
            onWheel={HandleWheel}
            className={styles.carousel}>
            {images.map(image => (
               <li
                  key={image}
                  className={styles.carousel__item}
               >
                  <Image
                     src={image}
                     className={styles.carousel__image}
                     alt="galery carousel"
                     width='440'
                     height='400' />
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Carousel;