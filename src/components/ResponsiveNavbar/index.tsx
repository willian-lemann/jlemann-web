import React, { Dispatch, SetStateAction } from 'react';
import { FiX } from 'react-icons/fi';

import styles from './index.module.scss';

interface ResponsiveNavbarProps {
   isOpenMenu: boolean,
   setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}

const ResponsiveNavbar: React.FC<ResponsiveNavbarProps> = ({ isOpenMenu, setIsOpenMenu }) => {


   return (
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
   );
}

export default ResponsiveNavbar;