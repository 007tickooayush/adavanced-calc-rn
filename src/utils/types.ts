export type CalculatorType = 'standard' | 'scientific';

export type CalcKeyTypeContextType = {
    calcKeyTypeContxt: CalculatorType;
    setCalcKeyTypeContxt: (calcType: CalculatorType) => void;
}