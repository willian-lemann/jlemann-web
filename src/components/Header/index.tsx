import React, { useEffect, useState } from 'react';

import Menu from 'react-hamburger-menu';
import { FiX } from 'react-icons/fi';

import logo from '../../assets/logo-jl.svg'
import ResponsiveNavbar from '../ResponsiveNavbar';
import Navbar from '../Navbar';
import styles from './index.module.scss';

const Header: React.FC = ({ children }) => {
   const [isOpenMenu, setIsOpenMenu] = useState(false);
   const [responsive, setResponsive] = useState(false);

   const GetWindowDimensions = () => {
      const { innerHeight: height, innerWidth: width } = window;
      return {
         height,
         width
      }
   };

   useEffect(() => {
      const dimensions = GetWindowDimensions();

      const { width, height } = dimensions;

      console.log(height, width)

      if (height < 722 && width < 1536) {
         setResponsive(true);
      }

   }, []);

   return (
      <>
         <header className={styles.headerContainer}>
            <section className={styles.logoSection}>
               {responsive ? (

                  <Menu
                     isOpen={isOpenMenu}
                     menuClicked={() => setIsOpenMenu(!isOpenMenu)}
                     strokeWidth={3}
                     rotate={0}
                     color='black'
                     borderRadius={0}
                     animationDuration={0.5}
                  />
               ) :
                  <img src={logo} alt="" width='100px' height='100' />
               }
            </section>

            {responsive
               ?
               <ResponsiveNavbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
               :
               <Navbar />
            }
         </header>
         {children}
      </>
   );
}

export default Header;