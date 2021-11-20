import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter, Routes, Route } from "react-router-native";
import Doctors from "./components/Doctors";
import Home from "./components/Home";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>
				Open up App.js to start working on your app! this is expo
			</Text>
			<Text>this is new paragraph</Text>
			<Text>this is another paragraph</Text>
			<StatusBar style="auto" />
			<NativeRouter>
				<Link to="/">
					<Text>Home</Text>
				</Link>
				<Link to="/home">
					<Text>Home</Text>
				</Link>
				<Link to="/doctors">
					<Text>Doctors</Text>
				</Link>

				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/home" element={<Home></Home>}></Route>
					<Route
						path="/doctors"
						element={<Doctors></Doctors>}
					></Route>
				</Routes>
			</NativeRouter>
			<Image
				source={{
					uri: "https://reactnative.dev/docs/assets/p_cat2.png",
				}}
				style={{ width: 200, height: 200 }}
			/>
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
