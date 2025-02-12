import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


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
        backgroundColor: 'red'
    },
    body: {
        flex: 16,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 2,
        margin: 2,
        backgroundColor: 'red'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 2,
        margin: 2,
        backgroundColor: 'red'
    },
});
