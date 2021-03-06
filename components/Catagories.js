import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
	{
		image: require("../assets/images/shopping-bag.png"),
		text: "Pick-up",
	},
	{
		image: require("../assets/images/soft-drink.png"),
		text: "Soft Drinks",
	},
	{
		image: require("../assets/images/bread.png"),
		text: "Bekary Items",
	},
	{
		image: require("../assets/images/fast-food.png"),
		text: "Fast Foods",
	},
	{
		image: require("../assets/images/coffee.png"),
		text: "Coffee & Tea",
	},
	{
		image: require("../assets/images/desserts.png"),
		text: "Desserts",
	},
	{
		image: require("../assets/images/deals.png"),
		text: "Deals",
	},
	{
		image: require("../assets/images/splash.png"),
		text: "Splash",
	},
];

export default function Catagories() {
	return (
		<View
			style={{
				backgroundColor: "white",
				marginTop: 7,
				paddingVertical: 10,
				paddingLeft: 20,
			}}
		>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((item, index) => (
					<View
						key={index}
						style={{ alignItems: "center", marginRight: 25 }}
					>
						<Image
							source={item.image}
							style={{
								width: 40,
								height: 50,
								resizeMode: "contain",
							}}
						/>
						<Text style={{ fontSize: 13, fontWeight: "bold" }}>
							{item.text}
						</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
