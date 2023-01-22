import { useContext } from "react";

import { ThemeContext } from "../pages/index";

export default function GrandChild(input: any) {
  console.log(input);

  const { inputValue, setInputVal } = useContext(ThemeContext);

  console.log(inputValue);

  const makeVal2 = () => {
    setInputVal("value2");
  };
  const makeVal3 = () => {
    console.log(input);
    setInputVal("value3");
  };
  const makeVal4 = () => {
    console.log(input);
    setInputVal("value4");
  };
  return (
    <>
      <button onClick={makeVal2}>Make value2</button>
      <br />
      <br />
      <button onClick={makeVal3}>Make value3</button>
      <br />
      <br />
      <button onClick={makeVal4}>Make value4</button>
    </>
  );
}
