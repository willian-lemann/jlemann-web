import React from 'react';

import { ScrollElement } from 'react-scroll';

const Element: React.FC = ({ children }) => {
   return (
      <>
         {children}
      </>
   );
}

export default ScrollElement(Element);