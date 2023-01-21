import { useContext } from "react";

import { ThemeContext } from "../pages/index";

export default function GrandChild() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const style = {
    outline: "none",
    cursor: "pointer",
    background: darkTheme ? "white" : "black",
    color: darkTheme ? "black" : "white",
    padding: ".5rem 1rem"
  };

  const handleClick = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <button style={style} onClick={handleClick}>
      Toggle Theme
    </button>
  );
}
