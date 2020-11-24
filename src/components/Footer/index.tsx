import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import styles from './index.module.scss';

const Footer: React.FC = () => {
   return (
      <section className={styles.footerSection}>
         <div className={styles.locationContainer}>
            <div className={styles.locationContent}>
               <p>
                  Jlemann - corretora
               </p>

               <p>
                  150 Elgin Street Ottawa
                  Ontario CA K2P 1L4
                </p>

               <p>
                  Estamos sempre aberto, 24 horas por dia 7 dias por semana
                </p>
            </div>
         </div>

         <div className={styles.footerContainer}>
            <ul className={styles.linksContainer}>
               <li>Home</li>
               <li>Modelos</li>
               <li>Projetos</li>
               <li>Contatos</li>
            </ul>

            <div className={styles.newsletterContainer}>
               <p>Fique por dentro das novidades</p>
               <div>
                  <input type="text" placeholder='Digite seu melhor e-mail' />
                  <button>Inscrever</button>
               </div>
            </div>

            <hr />

            <div className={styles.lastFooterContainer}>
               <div className={styles.socialMediaContainer}>
                  <p>Siga a gente nas redes sociais</p>
                  <div className={styles.socialMediaContent}>
                     <FiInstagram size={38} />, <FiFacebook size={38} />
                  </div>
               </div>
               <strong>© 2020, Made with ♥ by Willian Lemann</strong>
            </div>
         </div>
      </section>
   );
}

export default Footer;