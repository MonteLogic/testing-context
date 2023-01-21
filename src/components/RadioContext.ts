import { createContext, useContext } from 'react';

export const RadioControlContext = createContext({});

export const useRadioControl = () => useContext(RadioControlContext);