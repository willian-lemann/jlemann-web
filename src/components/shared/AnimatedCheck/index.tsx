import React from 'react';

import Lottie from 'react-lottie';
import checkLottieData from '../../../styles/lotties/check.json';

interface AnimatedCheckProps {
   loading: boolean
}

const AnimatedCheck: React.FC<AnimatedCheckProps> = ({ loading }) => {
   if (loading) {
      return (
         <Lottie
         
            style={{
               position: 'absolute',
               top: 2,
               left: 250, 
            }}
            height={35}
            width={35}
            options={{ 
               loop: false,
               animationData: checkLottieData,
               rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
               }
            }}
         />
      );
   }

   return <></>
}

export default AnimatedCheck;