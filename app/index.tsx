import { StyleSheet, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';

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
				<View style={styles.linkWrapper}>
					<CustomButton title='view menu' handlePress={() => router.navigate('/menu')} />
					<CustomButton title='leave a feedback' handlePress={() => router.navigate('/feedback')} />
				</View>
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
		flex: 1,
		paddingHorizontal: 20
	},
	title: {
		paddingVertical: 40,
		textAlign: 'center'
	},
	text: {
		paddingVertical: 20,
		marginVertical: 8,
		textAlign: 'center'
	},
	menu: {
		color: '#F4CE14',
		fontSize: 36
	},
	linkWrapper: {
		gap: 20
	}
});
