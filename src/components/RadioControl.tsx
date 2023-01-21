import React, { createContext, useContext, useState } from 'react';

interface RadioControlProps {
  name: string;
  options: string[];
  initialValue?: string;
}

interface RadioControlContext {
  name: string;
  value: string;
  setValue: (value: string) => void;
}

const RadioControlContext = createContext<RadioControlContext | null>(null);

const RadioControl: React.FC<RadioControlProps> = ({ name, options, initialValue }) => {
  const [value, setValue] = useState(initialValue || options[0]);

  return (
    <RadioControlContext.Provider value={{ name, value, setValue }}>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={(e) => setValue(e.target.value)}
          />
          {option}
        </label>
      ))}
    </RadioControlContext.Provider>
  );
};

const useRadioControl = (name: string): RadioControlContext | null => {
  const context = useContext(RadioControlContext);
  if (context === null || context.name !== name) {
    return null;
  }
  return context;
};

export { RadioControl, useRadioControl };
