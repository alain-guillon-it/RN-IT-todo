import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


function Todo({ i, task, handleDeteleOneTaskByTheParent }) {
	// Création des modals
	// const [modalEditVisible, setModalEditVisible] = useState(false);
	const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

	// Edite Todo
	// const [editedTodo, setEditedTodo] = useState(task);


	// function editThisTodo(index) {
	// 	handleClickTodoParent(editedTodo);
	// 	setModalEditVisible(!modalEditVisible);
	// }

	return (
		<>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginVertical: 5,
					padding: 8,
					borderWidth: 2,
					border: 1,
					backgroundColor: 'white',
					opacity: 0.9,
				}}
			>

				<Text style={styles.item}>{task}</Text>
				<View>
					{/* Supprimer */}
					<Pressable
						style={[styles.button, styles.buttonOpenDelete]}
						onPress={() => setModalDeleteVisible(true)}
					>
						<Text style={styles.textStyle}>
							
						</Text>
					</Pressable>

					{/* Editer */}
					<Pressable
						style={[styles.button, styles.buttonOpenEdit]}
						// onPress={() => setModalEditVisible(true)}
					>
						<Text style={styles.textStyle}>

						</Text>
					</Pressable>
				</View>
			</View>

			{/* Modal EDIT */}
			<View style={styles.centeredView}>
				<Modal
					animationType='slide'
					transparent={true}
					visible={modalEditVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
						setModalEditVisible(!modalEditVisible);
					}}
				>
					{/* <View style={styles.centeredView}>
						<View style={[styles.modalView, styles.modalViewEdit]}>
							<Text style={styles.modalTextEdit}>Mise à jour</Text>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								<TextInput
									// onChangeText={(text) => setEditedTodo(text)}
									// value={editedTodo}
									style={styles.inputAdd}
								></TextInput>
								<Pressable
									style={[styles.button]}
									// onPress={() => editThisTodo(i)}
								>
									<Text style={{ color: 'white' }}>confirmer</Text>
								</Pressable>
							</View>
						</View>
					</View> */}
				</Modal>
			</View>

			
		</>
	);
}

export default Todo;

const styles = StyleSheet.create({
	item: {
		fontSize: 16,
		height: 60,
		flex: 1,
		marginHorizontal: 10,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},

	
});
œœœ