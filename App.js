import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import Home from "./screens/Home";

export default function App() {
	return (
		<View style={styles.androidSafeArea}>
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	androidSafeArea: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
