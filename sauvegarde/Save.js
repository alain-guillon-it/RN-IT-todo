// Dépendances
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	SafeAreaView,
	StyleSheet,
	TextInput,
	Text,
	View,
	FlatList,
	ScrollView,
	ImageBackground,
	Pressable,
	Keyboard,
} from 'react-native';

// Composants personnel
import Todo from './Components/Todo';

// Image de fond de l'application
const backgroundUI = {
	uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
};



function save() {


	// Liste des tâches (Tableau initialisé)
	const [taskList, setTaskList] = useState([...originTaskList]);

	// Edition de l'input texte
	const [newTask, setNewTask] = useState('');

	// Edition d'une Task selon son index
	const handleEditOneTaskByTheParent = (text, index) => {
		console.log({
			index,
			text,
		});
	};


	return (
		<ImageBackground
			source={backgroundUI}
			resizeMode='cover'
			style={styles.image}
		>
			<SafeAreaView style={styles.container}>
				{/* PARTIE Titre + Formulaire d'ajout */}
				<View>
					<Text
						style={{
							fontSize: 32,
							textAlign: 'center',
							marginVertical: 16,
							color: 'white',
						}}
					>
						Task Manager
					</Text>

					{/* PARTIE AJOUT D'UNE TÂCHE */}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<TextInput
							onChangeText={(inputText) => setNewTask(inputText)}
							value={newTask}
							style={styles.inputAdd}
							placeholder='Add a new task here...'
						></TextInput>

						<Pressable
							android_ripple={{
								color: 'blue',
								radius: 50,
							}}
							style={{
								width: '20%',
								borderWidth: 2,
								borderColor: 'black',
								backgroundColor: 'skyblue',
								alignItems: 'center',
								paddingTop: 9,
							}}
							onPress={handleClickAddNewTask}
						>
							<Text style={styles.add}>
								
							</Text>
						</Pressable>
					</View>
				</View>

				{/* PARTIE pour scroller */}
				<ScrollView>
					{/* PARTIE AFFICHAGE DE LA LISTE */}
					{/* <View
						style={{
							marginVertical: 16,
						}}
					>
						{taskList && (
							<FlatList
								data={taskList}
								renderItem={({ item, index }) => (
									<Todo
										i={index}
										task={item}
										handleDeleteOneTaskByTheParent={(index) =>
											handleDeleteOneTaskByIndex(index)
										}
										handleEditOneTaskByTheParent={(text) =>
											console.log(text)
										}
									/>
								)}
							></FlatList>
						)}
					</View> */}

					<StatusBar style='auto' />
				</ScrollView>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		paddingRight: 20,
		paddingLeft: 20,
	},
	add: {
		flex: 1,
		color: 'white',
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	inputAdd: {
		height: 40,
		borderWidth: 2,
		borderColor: 'black',
		padding: 10,
		flex: 1,
		marginRight: 10,
		backgroundColor: 'white',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	item: {
		fontSize: 16,
		height: 35,
		flex: 1,
		marginRight: 10,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
