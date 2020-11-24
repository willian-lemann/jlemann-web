import { useContext } from "react";
import { ThemeContext } from "../store/context/ThemeProvider";

const useTheme = () => {
  const context = useContext(ThemeContext);
  const {
    state: { responsive },
    dispatch: setResponsive,
  } = context;

  return {
    responsive,
    setResponsive,
  };
};

export default useTheme;
