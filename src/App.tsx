import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../style/styles';


const App = () => {
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
					<Text>Handling Calculator Keypad using Body Container</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default App;
