import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

const ThemeContext = createContext<{
   state: {
      responsive: boolean
   },
   dispatch: Dispatch<SetStateAction<any>>
}>({
   state: {
      responsive: false
   },
   dispatch: () => { }
});

const ThemeProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useState({
      responsive: false
   })

   return (
      <ThemeContext.Provider value={{ state, dispatch }}>
         {children}
      </ThemeContext.Provider>
   );
}

export { ThemeProvider, ThemeContext };