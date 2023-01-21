import React, { useEffect } from "react";
import { useRadioControl } from "./RadioContext";

const RadioLogger: React.FC = () => {
  const selected = useRadioControl();
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return <div>Radio Logger</div>;
};

export default RadioLogger;
