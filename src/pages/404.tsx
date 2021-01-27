import React from 'react';

import NotFound from '../assets/404.svg';

import styles from  '../styles/notFound.module.scss';

const Custom404: React.FC = () => {
   return (
      <div className={styles.notFoundContainer}>
         <h1>Oops! Página não encontrada!</h1>
         <img src={NotFound} alt="" />
      </div>
   );
}

export default Custom404;