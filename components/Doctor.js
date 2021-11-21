import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	name: {
		color: "red",
	},
	background: {
		backgroundColor: "red",
	},
});

export default function Doctor({ user }) {
	const { name, email } = user;
	return (
		<View style={styles.background}>
			<Text style={styles.name}>this is {name}</Text>
			<Image
				source={{
					uri: "https://reactnative.dev/docs/assets/p_cat2.png",
				}}
				style={{ width: 200, height: 200 }}
			/>
		</View>
	);
}
