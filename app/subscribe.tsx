import { ThemedText } from '@/components/ThemedText';
import { validateEmail } from '@/utils';
import { useMemo, useState } from 'react';
import { Alert, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function SubscribeScreen() {
	const [email, setEmail] = useState('');

	const isDisabled = useMemo(() => !validateEmail(email), [email]);

	const handleSubscribe = () => {
		Alert.alert('Thanks for subscribing, stay tuned !');
		setEmail('');
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode='contain'
				accessibilityLabel='Little lemon Picture'
				source={require('@/assets/images/little-lemon-logo-grey.png')}
			/>
			<ThemedText type='default' style={styles.text}>
				Subscribe to oour newsletter for our latest delicious recipes !
			</ThemedText>

			<TextInput
				style={styles.input}
				value={email}
				placeholder='Type your email'
				placeholderTextColor='#00000067'
				onChangeText={(e) => setEmail(e)}
				inputMode='email'
				keyboardType='email-address'
				textContentType='emailAddress'
				clearButtonMode='always'
			/>

			<TouchableOpacity
				onPress={handleSubscribe}
				accessibilityLabel='subscribe button'
				disabled={isDisabled}
				style={[styles.button, isDisabled ? { opacity: 0.2 } : { opacity: 1 }]}
			>
				<ThemedText style={styles.buttonText}>Subscribe</ThemedText>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 24,
		gap: 32
	},
	image: {
		height: 100,
		width: '100%'
	},
	text: {
		color: '#333333',
		textAlign: 'center',
		fontSize: 20
	},
	input: {
		borderWidth: 1,
		borderColor: '#333333',
		borderRadius: 6,
		padding: 8
	},
	button: {
		backgroundColor: '#3e524b',
		borderRadius: 6,
		padding: 5
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff'
	}
});
