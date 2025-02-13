import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../style/styles';
import CalcKeyPadContainer from './keypad/CalcKeyPadContainer';

const App = () => {

	// TODO: handle the tabs and new tab options
	// also implement the handling of the state for multiple tabs

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={[styles.rootLayout]}>
				<View style={[styles.header]}>
					<Text>Handling Tabs using Header Container</Text>
				</View>
				<View style={[styles.footer]}>
					<Text>Handling Display using Footer Container</Text>
				</View>
				<View style={[styles.body]}>
					<CalcKeyPadContainer />
					<Text>Handling Calculator Keypad using Body Container</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default App;
