import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../style/styles';

const KeypadButton = ({ btnText }: { btnText: string }) => {

    // todo: pass and define the function for handling the button press events 

    return (
        <TouchableOpacity
            onPress={() => console.log(btnText + ' button clicked')}
        >
            <View style={[styles.keypadBtn]}>
                <Text style={[styles.keypadTxt]}>{btnText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default KeypadButton;