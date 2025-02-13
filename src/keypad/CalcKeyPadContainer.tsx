import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { CalcTypeContext } from '../utils/context';
import { CalculatorType } from '../utils/types';
import CalcKeyPadStandard from './CalcKeyPadStandard';
import CalcKeyPadScientific from './CalcKeyPadScientific';

const CalcKeyPadContainer = () => {
    const [calcKeypadType, setCalcKeypadType] = useState<CalculatorType>('standard');
    
    // define the standard keybpard layout first, and handle the arithmetic operations 

    return (
        <View>
            <CalcTypeContext.Provider value={{ calcKeyTypeContxt: calcKeypadType, setCalcKeyTypeContxt: setCalcKeypadType }}>
                {/* <Text>CalcKeyPadContainer</Text> */}
                {
                    calcKeypadType === 'standard' && <CalcKeyPadStandard />
                }
                {
                    calcKeypadType === 'scientific' && <CalcKeyPadScientific />
                }
            </CalcTypeContext.Provider>
        </View>
    );
}

export default CalcKeyPadContainer;