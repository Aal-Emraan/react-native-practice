import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	name: {
		color: "red",
	},
});

export default function Doctor({ user }) {
	const { name, email } = user;
	return (
		<View>
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
