import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const KeypadButton = ({ btnText }: { btnText: string }) => {
    return (
        <TouchableOpacity
            onPress={() => console.log(btnText+' button clicked')}
        >
            <Text>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default KeypadButton;