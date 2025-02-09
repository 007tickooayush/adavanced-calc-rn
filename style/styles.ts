import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    rootLayout: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',        
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    body: {
        flex: 10,
        justifyContent: 'flex-end'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
});
