import React from "react";
import { View, Text } from "react-native";
import Catagories from "../components/Catagories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
	return (
		<View style={{ backgroundColor: "#eee", flex: 1, paddingTop: 10 }}>
			<View style={{ backgroundColor: "white", paddingVertical: 10 }}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<Catagories />
		</View>
	);
}
