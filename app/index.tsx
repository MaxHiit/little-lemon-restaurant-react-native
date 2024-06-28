import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Image
					style={styles.logo}
					resizeMode='contain'
					accessibilityLabel='Little lemon Logo'
					source={require('@/assets/images/little-lemon-logo.png')}
				/>
				<ThemedText type='title' style={styles.title}>
					Little Lemon, your local Mediterranean Bistro
				</ThemedText>
			</View>
			<View style={styles.buttonWrapper}>
				<Pressable style={styles.button} onPress={() => router.push('/subscribe')}>
					<ThemedText style={styles.buttonText} type='link'>
						Newsletter
					</ThemedText>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: '#fff',
		alignItems: 'center'
	},
	innerContainer: {
		flex: 1,
		justifyContent: 'center',
		gap: 20
	},
	title: {
		marginTop: 16,
		paddingVertical: 10,
		color: '#333333',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	},
	logo: {
		height: 200,
		width: '100%'
	},
	buttonWrapper: {
		marginTop: 'auto',
		width: '100%'
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
