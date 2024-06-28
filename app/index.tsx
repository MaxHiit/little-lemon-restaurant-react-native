import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
	return (
		<ScrollView style={styles.container}>
			<Image
				style={styles.logo}
				resizeMode='contain'
				accessibilityLabel='Little lemon Logo'
				source={require('@/assets/images/little-lemon-logo.png')}
			/>
			<ThemedText type='default' style={styles.title}>
				Little Lemon, your local Mediterranean Bistro
			</ThemedText>

			<View style={styles.imageWrapper}>
				<Image
					style={styles.image}
					resizeMode='cover'
					accessibilityLabel='Food Picture 1'
					source={require('@/assets/images/picture-1.png')}
				/>
				<Image
					style={styles.image}
					resizeMode='cover'
					accessibilityLabel='Food Picture 2'
					source={require('@/assets/images/picture-2.png')}
				/>
				<Image
					style={styles.image}
					resizeMode='cover'
					accessibilityLabel='Food Picture 3'
					source={require('@/assets/images/picture-3.png')}
				/>
				<Image
					style={styles.image}
					resizeMode='cover'
					accessibilityLabel='Food Picture 4'
					source={require('@/assets/images/picture-4.png')}
				/>
			</View>
			{/* <View style={styles.linkWrapper}>
				<CustomButton title='view menu' handlePress={() => router.navigate('/menu')} />
				<CustomButton title='leave a feedback' handlePress={() => router.navigate('/feedback')} />
			</View> */}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: '#fff'
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
		height: 100,
		width: '100%'
	},
	image: {
		width: '100%',
		height: 250,
		borderRadius: 10
	},
	imageWrapper: {
		gap: 20,
		marginTop: 20
	},
	linkWrapper: {
		gap: 20,
		marginTop: 20
	}
});
