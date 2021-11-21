import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Doctor from "./Doctor";

export default function Doctors() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<View>
			<Text>this is Doctors</Text>
			<ScrollView>
				{users.map((user) => (
					<Doctor user={user} key={user.id}></Doctor>
				))}
			</ScrollView>
		</View>
	);
}
