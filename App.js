import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	Image,
	SafeAreaView,
	StyleSheet,
	TouchableHighlight,
	Text,
	View,
	Button,
	Alert,
} from "react-native";
import { Link, NativeRouter, Routes, Route } from "react-router-native";
import Doctors from "./components/Doctors";
import Home from "./components/Home";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={() => console.log("text pressed")}>
				Open up App.js to start working on your app! this is expo and
				make it as long as possible.
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
			<TouchableHighlight onPress={() => console.log("image pressed")}>
				<Image
					// blurRadius={2}
					fadeDuration={1000}
					source={{
						width: 200,
						height: 300,
						uri: "https://picsum.photos/200/300",
					}}
				/>
			</TouchableHighlight>
			<Button
				color="red"
				title="click me"
				onPress={() =>
					Alert.alert("My title", "This is and alert", [
						{
							text: "Yes",
						},
						{ text: "No" },
					])
				}
			></Button>
		</SafeAreaView>
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
