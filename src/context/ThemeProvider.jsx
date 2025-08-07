import { createContext, useContext, useState } from "react";

//Paso 1 crear el contexto
export const ThemeContext = createContext();

//Paso 2 crear el proveedor
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Paso 3 consumir el contexto
export const useTheme = () => {
 return useContext(ThemeContext);
};

export default ThemeProvider;