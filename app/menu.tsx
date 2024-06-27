import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const MENU_ITEMS = [
	'Hummus',
	'Moutabal',
	'Falafel',
	'Marinated Olives',
	'Kofta',
	'Eggplant Salad',
	'Lentil Burger',
	'Smoked Salmon',
	'Kofta Burger',
	'Turkish Kebab',
	'Fries',
	'Buttered Rice',
	'Bread Sticks',
	'Pita Pocket',
	'Lentil Soup',
	'Greek Salad',
	'Rice Pilaf',
	'Baklava',
	'Tartufo',
	'Tiramisu',
	'Panna Cotta'
];

export default function MenuScreen() {
	return (
		<View style={styles.container}>
			<View>
				<Header />
			</View>
			<View style={styles.content}>
				<ThemedText type='title' style={styles.title}>
					View Menu
				</ThemedText>
				<ScrollView style={styles.scrollContainer}>
					{MENU_ITEMS && MENU_ITEMS.map((item) => <Text style={styles.itemText}>{item}</Text>)}
				</ScrollView>
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
	scrollContainer: {
		paddingHorizontal: 40
	},
	itemText: {
		color: '#F4CE14',
		fontSize: 36
	}
});
