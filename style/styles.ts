import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    rootLayout: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',  
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 2,
        margin: 2,
        // backgroundColor: 'red'
    },
    body: {
        flex: 16,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 2,
        margin: 2,
        // backgroundColor: 'red'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 2,
        margin: 2,
        // backgroundColor: 'red'
    },
    keypadBtn: {
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5E4955',
        // borderWidth: 1,
        // borderColor: '#888',
        borderRadius: 50,
        // boxShadow: '4 4 4 4 #221D23',
        margin: 2,
        // color: '#000000'
    },
    keypadTxt: {
        color: '#FFFFFF',
    },

    standardKeypadContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
});
