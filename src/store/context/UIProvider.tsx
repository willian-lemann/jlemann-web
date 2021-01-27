import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const UiContext = createContext<{
  state: {
    responsive: boolean;
  };
  dispatch: Dispatch<SetStateAction<any>>;
}>({
  state: {
    responsive: false,
  },
  dispatch: () => {},
});

const UiProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useState({
    responsive: false,
  });

  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};

export { UiProvider, UiContext };
