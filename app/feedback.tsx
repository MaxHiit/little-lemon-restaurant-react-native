import FormField from '@/components/FormField';
import Header from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function FeedbackScreen() {
	const [form, setForm] = useState({
		firstname: '',
		lastname: '',
		phoneNumber: '',
		message: ''
	});
	return (
		<View style={styles.container}>
			<View>
				<Header />
			</View>
			<ScrollView style={styles.content}>
				<ThemedText type='title' style={styles.title}>
					How was yout visit to Little Lemon ?
				</ThemedText>
				<ThemedText type='default' style={styles.text}>
					Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in
					a lively but casual environment. We would love to hear more about your experience with us!
				</ThemedText>

				<FormField
					title='Firstname'
					placeholder='First Name'
					value={form.firstname}
					handleChangeText={(e) => setForm({ ...form, firstname: e })}
					keyboardType='default'
					clearButtonMode='always'
				/>
				<FormField
					title='Lastname'
					placeholder='Last Name'
					value={form.lastname}
					handleChangeText={(e) => setForm({ ...form, lastname: e })}
					keyboardType='default'
					clearButtonMode='always'
				/>
				<FormField
					title='Phone Number'
					placeholder='Phone Number'
					value={form.phoneNumber}
					handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
					keyboardType='phone-pad'
					clearButtonMode='always'
				/>
				<FormField
					title='Message'
					placeholder='Please leave feedback'
					value={form.message}
					handleChangeText={(e) => setForm({ ...form, message: e })}
					keyboardType='default'
					multiline={true}
					maxLength={250}
				/>
			</ScrollView>
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
		padding: 16,
		textAlign: 'center',
		fontSize: 18
	},
	text: {
		textAlign: 'center'
	}
});
