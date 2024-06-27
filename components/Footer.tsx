import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<ThemedView style={styles.container}>
			<ThemedText type='default' style={styles.footer}>
				All rights reserved by Little Lemon {currentYear}
			</ThemedText>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		backgroundColor: '#F4CE14'
	},
	footer: {
		color: 'black',
		textAlign: 'center'
	}
});
