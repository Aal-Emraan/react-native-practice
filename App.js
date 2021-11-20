import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>
				Open up App.js to start working on your app! this is expo
			</Text>
			<Text>this is new paragraph</Text>
			<Text>this is another paragraph</Text>
			<Home></Home>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
