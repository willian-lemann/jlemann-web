import React, { WheelEvent } from 'react';

import { images } from '../../api/image.data';

import styles from './index.module.scss';

const Carousel: React.FC = () => {

   const HandleWheel = (event: WheelEvent<HTMLUListElement>) => {
      if (event.deltaY > 0) {
         event.currentTarget.scrollBy({ left: 300 })
      } else {
         event.currentTarget.scrollBy({ left: -300 })
      }
   }

   return (
      <ul
         onWheel={HandleWheel}
         className={styles.carousel}>

         {images.map(image => (
            <li
               key={image}
               className={styles.carousel__item}
            >
               <img
                  src={image}
                  className={styles.carousel__image}
                  alt="galery carousel"
               />
            </li>
         ))}
      </ul>
   );
}

export default Carousel;