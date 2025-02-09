import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../style/styles';


const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={[styles.rootLayout]}>
				<View style={[styles.header]}>
					<Text>Header Container of the View</Text>
				</View>
				<View style={[styles.body]}>
					<Text>Body Container of the View</Text>
				</View>
				<View style={[styles.footer]}>
					<Text>Footer Container of the View</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default App;
