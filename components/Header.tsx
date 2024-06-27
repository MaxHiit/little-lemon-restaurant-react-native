import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function Header() {
	return (
		<ThemedView style={styles.container}>
			<ThemedText type='default' style={styles.header}>
				Welcome Little Lemon
			</ThemedText>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F4CE14'
	},
	header: {
		padding: 20,
		fontSize: 30,
		color: 'black',
		textAlign: 'center'
	}
});
