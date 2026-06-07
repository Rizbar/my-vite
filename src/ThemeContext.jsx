import { createContext, useContext } from "react";

const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {}
});

const Theme = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <button type="button" onClick={handleClick}>
        {darkMode ? 'Dark' : 'Light'}
      </button>
    </>
  );
}

const ThemeDark = { ThemeContext, Theme };

export default ThemeDark;