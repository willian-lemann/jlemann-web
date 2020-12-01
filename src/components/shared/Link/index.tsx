import React from 'react';
import { Link as LinkTo } from 'react-scroll';

interface LinkProps {
   to: string,
   smooth: boolean
}

const Link: React.FC<LinkProps> = ({ children, ...otherProps }) => {
   return (
      <li>
         <LinkTo {...otherProps}>
            {children}
         </LinkTo>
      </li>
   );
}

export default Link;