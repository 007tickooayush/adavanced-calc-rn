import { createContext } from "react";
import { CalculatorType } from "./types";


export const CalcTypeContext = createContext({
    calcKeyTypeContxt: 'standard',
    setCalcKeyTypeContxt: (calcType: CalculatorType) => { }
});