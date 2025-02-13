import { View, Text } from 'react-native'
import React from 'react'
import KeypadButton from './KeypadButton';
import { styles } from '../../style/styles';

const CalcKeyPadStandard = () => {
    return (
        <View style={styles.standardKeypadContainer}>
            <KeypadButton btnText={'CalcKeyPadStandard Button'} />
            <KeypadButton btnText={'CalcKeyPadStandard Button'} />
            <KeypadButton btnText={'CalcKeyPadStandard Button'} />
            <KeypadButton btnText={'CalcKeyPadStandard Button'} />
        </View>
    )
}

export default CalcKeyPadStandard;