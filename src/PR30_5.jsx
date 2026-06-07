import { useState } from "react";
import ThemeModule from "./ThemeContext.jsx"; 

const { ThemeContext, Theme } = ThemeModule;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        
        <h1>{darkMode ? "Dark!" : "Light!"}</h1>
        <Theme />
        
      </div>
    </ThemeContext.Provider>
  );
}