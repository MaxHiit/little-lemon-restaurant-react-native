import { StyleSheet, View } from 'react-native';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View>
				<Header />
			</View>
			<View style={styles.content}>
				<ThemedText type='title' style={styles.title}>
					Welcome to Little Lemon
				</ThemedText>
				<ThemedText type='default' style={styles.text}>
					Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in
					a lively but casual environment. We would love to hear more about your experience with us!
				</ThemedText>
			</View>
			<View>
				<Footer />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(73, 94, 87)'
	},
	content: {
		flex: 1
	},
	title: {
		padding: 40,
		textAlign: 'center'
	},
	text: {
		padding: 20,
		marginVertical: 8,
		textAlign: 'center'
	}
});
