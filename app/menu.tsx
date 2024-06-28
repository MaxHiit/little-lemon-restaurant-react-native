import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

type ItemType = {
	name: string;
	price: string;
	id: string;
};

const MENU_ITEMS: ItemType[] = [
	{ name: 'Hummus', price: '$5.00', id: '1A' },
	{ name: 'Moutabal', price: '$5.00', id: '2B' },
	{ name: 'Falafel', price: '$7.50', id: '3C' },
	{ name: 'Marinated Olives', price: '$5.00', id: '4D' },
	{ name: 'Kofta', price: '$5.00', id: '5E' },
	{ name: 'Eggplant Salad', price: '$8.50', id: '6F' },
	{ name: 'Lentil Burger', price: '$10.00', id: '7G' },
	{ name: 'Smoked Salmon', price: '$14.00', id: '8H' },
	{ name: 'Kofta Burger', price: '$11.00', id: '9I' },
	{ name: 'Turkish Kebab', price: '$15.50', id: '10J' },
	{ name: 'Fries', price: '$3.00', id: '11K' },
	{ name: 'Buttered Rice', price: '$3.00', id: '12L' },
	{ name: 'Bread Sticks', price: '$3.00', id: '13M' },
	{ name: 'Pita Pocket', price: '$3.00', id: '14N' },
	{ name: 'Lentil Soup', price: '$3.75', id: '15O' },
	{ name: 'Greek Salad', price: '$6.00', id: '16Q' },
	{ name: 'Rice Pilaf', price: '$4.00', id: '17R' },
	{ name: 'Baklava', price: '$3.00', id: '18S' },
	{ name: 'Tartufo', price: '$3.00', id: '19T' },
	{ name: 'Tiramisu', price: '$5.00', id: '20U' },
	{ name: 'Panna Cotta', price: '$5.00', id: '21V' }
];

const Item = ({ item }: { item: ItemType }) => {
	const { name, price } = item;

	return (
		<View style={styles.innerContainer}>
			<ThemedText style={styles.itemText}>{name}</ThemedText>
			<ThemedText style={styles.itemText}>{price}</ThemedText>
		</View>
	);
};

export default function MenuScreen() {
	const [showMenu, setShowMenu] = useState(false);
	const renderItem = ({ item }: { item: ItemType }) => <Item item={item} />;

	return (
		<View style={styles.container}>
			<View>
				<Header />
			</View>
			<View style={styles.content}>
				<ThemedText style={styles.infoSection}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae illum voluptate officiis velit
					expedita, id facere corrupti at illo, ipsum ut asperiores rem, tenetur vel. Adipisci iure
				</ThemedText>
				<Pressable style={styles.button} onPress={() => setShowMenu(!showMenu)}>
					<ThemedText style={styles.buttonText}>View Menu</ThemedText>
				</Pressable>
				{showMenu && (
					<FlatList
						data={MENU_ITEMS}
						keyExtractor={(item) => item.id}
						renderItem={renderItem}
						ListFooterComponent={Footer}
						style={styles.listWrapper}
					/>
				)}
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
		alignItems: 'center'
	},
	infoSection: {
		textAlign: 'center',
		padding: 20
	},
	button: {
		padding: 10,
		paddingHorizontal: 40,
		marginVertical: 8,
		margin: 40,
		backgroundColor: '#EDEFEE',
		borderRadius: 12
	},
	buttonText: {
		color: '#333333',
		textAlign: 'center'
	},
	listWrapper: {
		width: '100%'
	},
	innerContainer: {
		paddingHorizontal: 40,
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	itemText: {
		color: '#F4CE14',
		fontSize: 20
	}
});
