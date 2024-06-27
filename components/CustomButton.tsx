import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';

type CustomButtonProps = {
	title: string;
	handlePress: () => void;
};

export default function CustomButton({ title, handlePress }: CustomButtonProps) {
	return (
		<TouchableOpacity onPress={handlePress} style={styles.button}>
			<ThemedText type='defaultSemiBold' style={styles.text}>
				{title}
			</ThemedText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: '#F4CE14',
		padding: 10
	},
	text: {
		color: 'black'
	}
});
