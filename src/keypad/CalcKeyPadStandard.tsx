import { View, Text } from 'react-native'
import React from 'react'
import KeypadButton from './KeypadButton';
import { styles } from '../../style/styles';
import { nums, std_ops } from '../utils/constants';

const CalcKeyPadStandard = () => {
    return (
        <View style={styles.standardKeypadRootContainer}>
            
            {/* create a separate numeric board container */}
            
            <View style={[styles.standardKeypadNumContainer]}>
                {
                    nums.map((num: string, idx: number) => <KeypadButton key={idx} btnText={num} />)
                }
            </View>

            {/* create separate container(s) for operators */}
            <View style={[styles.standardKeypadOpsContainer]}>
                {
                    std_ops.map((op: string, idx: number) => <KeypadButton key={idx} btnText={op} />)
                }
            </View>

            
            {/* <KeypadButton btnText={'CalcKeyPadStandard Button'} />
            <KeypadButton btnText={'CalcKeyPadStandard Button'} />
            <KeypadButton btnText={'CalcKeyPadStandard Button'} /> */}
        </View>
    )
}

export default CalcKeyPadStandard;