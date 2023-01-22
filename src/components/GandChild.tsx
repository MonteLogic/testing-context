import { useContext } from "react";

import { ThemeContext } from "../pages/index";

export default function GrandChild(input: any) {
  console.log(input);

  // const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const handleClick = () => {
    console.log(input);
    // setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <button onClick={handleClick}>
      Toggle Theme
    </button>
  );
}
