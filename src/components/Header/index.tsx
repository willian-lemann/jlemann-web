import React, { useState } from 'react';

import Menu from 'react-hamburger-menu';
import { FiX } from 'react-icons/fi';
import styles from './index.module.scss';

const Header: React.FC = () => {
   const [isOpenMenu, setIsOpenMenu] = useState(false);

   console.log(isOpenMenu)
   return (
      <header className={styles.headerContainer}>
         <section className={styles.logoSection}>
            <Menu
               isOpen={isOpenMenu}
               menuClicked={() => setIsOpenMenu(!isOpenMenu)}
               strokeWidth={3}
               rotate={0}
               color='black'
               borderRadius={0}
               animationDuration={0.5}
            />
            {/* <img src="/logo-jl.svg" alt="" /> */}
         </section>

         <nav
            className={isOpenMenu ? styles.menuActive : styles.menu}>
            <div className={styles.menuIconCloseContainer}>
               <FiX
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                  className={styles.menuIconClose}
                  size={38}
               />
            </div>

            <ul>
               <li>Home</li>
               <li>Projetos na planta</li>
               <li>Modelos de imóveis</li>
               <li>Contato</li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;