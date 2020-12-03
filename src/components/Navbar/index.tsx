import React from 'react';

import styles from './index.module.scss';

const Navbar: React.FC = () => {
   return (
      <nav className={styles.menu}>
         <ul> 
            <li>Projetos na planta</li>
            <li>Modelos de imóveis</li>
            <li>Contato</li>
         </ul>
      </nav>
   );
}

export default Navbar;