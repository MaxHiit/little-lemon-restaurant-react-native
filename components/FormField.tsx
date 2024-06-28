import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface FormFieldProps extends TextInputProps {
	title: string;
	value: string;
	placeholder: string;
	handleChangeText: (e: string) => void;
}

export default function FormField({
	title,
	value,
	placeholder,
	handleChangeText,
	...props
}: FormFieldProps) {
	return (
		<View style={styles.container}>
			<ThemedText type='subtitle' style={styles.title}>
				{title}
			</ThemedText>

			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.input}
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#000000c9'
					onChangeText={handleChangeText}
					{...props}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 8,
		marginVertical: 12
	},
	title: {
		fontSize: 14
	},
	text: {
		textAlign: 'center'
	},
	inputWrapper: {
		height: 40
	},
	input: {
		flex: 1,
		borderColor: '#EDEFEE',
		backgroundColor: '#F4CE14',
		padding: 10
	}
});
