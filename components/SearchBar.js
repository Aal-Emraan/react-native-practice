import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import Clock from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
	return (
		<View
			style={{
				flexDirection: "row",
				marginTop: 15,
				paddingHorizontal: 10,
			}}
		>
			<GooglePlacesAutocomplete
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: "#eee",
						borderRadius: 20,
						fontWeight: "700",
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: "#eee",
						borderRadius: 50,
						marginRight: 10,

						alignItems: "center",
						flexDirection: "row",
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 10 }}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "white",
							padding: 8,
							borderRadius: 20,
							marginRight: 10,
						}}
					>
						<Clock
							name="clockcircle"
							size={14}
							style={{ marginRight: 10 }}
						/>
						<Text>Search</Text>
					</View>
				)}
			/>
		</View>
	);
}
