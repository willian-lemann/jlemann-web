import React, { ChangeEvent, useState } from 'react';
import api from '../../config/axiosConfig';

import LinkTo from '../shared/Link';
import Link from 'next/link';

import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { animateScroll } from 'react-scroll';
import AnimatedCheck from '../shared/AnimatedCheck';

import styles from './index.module.scss';

const Footer: React.FC = () => {
   const [email, setEmail] = useState('');
   const [loading, setLoading] = useState(false);

   const HandleSubmitSubscription = async () => {
      setLoading(true);

      const data = {
         email
      }

      try {
         const response = await api.post('/news-letters', data, {
            headers: {
               Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2ODY2NTAzLCJleHAiOjE2MDk0NTg1MDN9.ZEwxLwNPLS0MXNYaIlZbS0W-sIyXitCHOi4z-x6kZTk'
            }
         });

         if (!response.data)
            return


      } catch (error) {
         setLoading(false);
      }
   }

   const ScrollToTop = () => animateScroll.scrollToTop();

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
            <div className={styles.firstFooterContainer}>
               <ul className={styles.linksContainer}>
                  <li onClick={() => ScrollToTop()} >Home</li>
                  <LinkTo smooth to='properties'>Modelos</LinkTo>
                  <LinkTo smooth to='projects'>Projetos</LinkTo>
                  <li>Contatos</li>
               </ul>

               <div className={styles.termsContainer}>
                  <ul>
                     <li>
                        <Link href='/privacy'>
                           Politica de privacidade
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className={styles.newsletterContainer}>
                  <p>Fique por dentro das novidades</p>
                  <div className={styles.wrapper}>
                     <input
                        type="text"
                        placeholder='Digite seu melhor e-mail'
                        value={email}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                     />
                     <AnimatedCheck loading={loading} />
                     <button onClick={HandleSubmitSubscription}>Inscrever</button>
                  </div>
               </div>
            </div>

            <hr />

            <div className={styles.lastFooterContainer}>
               <div className={styles.socialMediaContainer}>
                  <p>Siga a gente nas redes sociais</p>
                  <div className={styles.socialMediaContent}>
                     <FiInstagram size={38} /> <FiFacebook size={38} />
                  </div>
               </div>
               <strong>© 2020, Made with ♥ by Willian Lemann</strong>
            </div>
         </div>
      </section>
   );
}

export default Footer;