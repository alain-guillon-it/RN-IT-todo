// Dépendances
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faClipboardList,
	faPenToSquare,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';

const colors = {
	black: '#333333',
	white: '#F1F1F1',
	blue: '#0000FF',
	red: 'salmon',
	gold: '#FFD700',
	grey: '#959595',
	transparent: 'transparent',
};

function Task({ i, task, handleDeteleOneTaskByTheParent, updateOneTaskByTheParent }) {
	// Status des modals
	const [modalEditVisible, setModalEditVisible] = useState(false);
	const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

	const [editTask, setEditTask] = useState(task);

	// Confirm update one task
	const editThisTodo = () => {
		updateOneTaskByTheParent(i, editTask);
		setModalEditVisible(!modalEditVisible);
	};

	// Confirm delete one task
	const deleteThisTask = (indexPosition) => {
		handleDeteleOneTaskByTheParent(indexPosition);
		setModalDeleteVisible(!modalDeleteVisible);
	};

	// Edit
	return (
		<>
			<View
				key={i}
				style={[
					styles.row,
					{
						marginVertical: 4,
						backgroundColor: colors.white,
						padding: 8,
					},
				]}
			>
				<View style={{ width: '10%' }}>
					<Text>
						{' '}
						<FontAwesomeIcon
							icon={faClipboardList}
							size={18}
						/>
					</Text>
				</View>
				<View style={{ width: '65%' }}>
					<Text>{task}</Text>
				</View>
				<View style={[styles.row, styles.justifyBetween, { width: '25%' }]}>
					{/* BTN EDIT */}
					<Pressable
						style={[
							styles.btn,
							styles.btnWarning,
							styles.btnSmall,
							{
								borderColor: colors.black,
							},
						]}
						android_ripple={{
							color: colors.black,
							radius: 50,
						}}
						onPress={() => setModalEditVisible(true)}
					>
						<Text>
							<FontAwesomeIcon
								icon={faPenToSquare}
								style={{ color: colors.black }}
							/>
						</Text>
					</Pressable>

					{/* BTN DELETE */}
					<Pressable
						style={[
							styles.btn,
							styles.btnDanger,
							styles.btnSmall,
							{
								borderColor: colors.black,
							},
						]}
						android_ripple={{
							color: colors.black,
							radius: 50,
						}}
						onPress={() => setModalDeleteVisible(true)}
					>
						<Text>
							<FontAwesomeIcon
								icon={faTrash}
								style={{ color: colors.black }}
							/>
						</Text>
					</Pressable>
				</View>
			</View>

			{/* MODAL EDIT */}
			<View style={styles.centeredView}>
				<Modal
					animationType='slide'
					transparent={true}
					visible={modalEditVisible}
					onRequestClose={() => {
						setModalEditVisible(!modalEditVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalTextEdit}>
								Vous êtes sur le point de modifier une tâche.
							</Text>
							<View style={[styles.row, styles.justifyAround]}>
								<TextInput
									style={styles.input}
									value={editTask}
									onChangeText={setEditTask}
								/>

								<Pressable
									style={[styles.btnLarge, styles.btnWarning]}
									onPress={editThisTodo}
								>
									<Text style={styles.btnText}>Mettre à jour</Text>
								</Pressable>

								<Pressable
									style={[styles.btnLarge, styles.btnSecondary]}
									onPress={() => setModalEditVisible(!modalEditVisible)}
								>
									<Text style={styles.btnText}>Annuler</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</Modal>
			</View>

			{/* MODAL DELETE */}
			<View style={styles.centeredView}>
				<Modal
					animationType='slide'
					transparent={true}
					visible={modalDeleteVisible}
					onRequestClose={() => {
						setModalDeleteVisible(!modalDeleteVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalTextEdit}>
								Souhaitez-vous réellement supprimer votre tâche ?
							</Text>
							<View style={[styles.row, styles.justifyAround]}>
								<Pressable
									style={[styles.btnLarge, styles.btnWarning]}
									onPress={() =>
										setModalDeleteVisible(!modalDeleteVisible)
									}
								>
									<Text style={styles.btnText}>Annuler</Text>
								</Pressable>

								<Pressable
									style={[styles.btnLarge, styles.btnDanger]}
									onPress={() => deleteThisTask(i)}
								>
									<Text style={styles.btnText}>Confirmer</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		</>
	);
}

export default Task;

const styles = StyleSheet.create({
	// GENERAL
	backgroundImage: {
		width: '100%',
		height: '100%',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	justifyAround: {
		justifyContent: 'space-around',
	},
	h1: {
		fontSize: 32,
		textTransform: 'uppercase',
		color: colors.white,
	},
	h2: {
		fontSize: 24,
		textTransform: 'capitalize',
		color: colors.gold,
	},
	btn: {
		borderRadius: 5,
		elevation: 1,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: colors.gold,
	},
	btnText: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	btnSmall: {
		paddingHorizontal: 8,
		paddingVertical: 4,
	},
	btnLarge: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	btnInfo: {
		backgroundColor: colors.black,
	},
	btnDanger: {
		backgroundColor: colors.red,
	},
	btnWarning: {
		backgroundColor: colors.gold,
	},
	btnSecondary: {
		backgroundColor: colors.grey,
	},
	strong: {
		fontWeight: 'bold',
	},
	em: {
		fontStyle: 'italic',
	},
	textLight: {
		color: colors.white,
	},
	textDanger: {
		color: colors.red,
	},

	// BODY
	body: {
		flex: 1,
		paddingTop: 40,
		paddingBottom: 10,
		paddingRight: 10,
		paddingLeft: 10,
	},

	// HEADER
	header: {
		flex: 1.5,
		alignItems: 'center',
		justifyContent: 'space-around',
		// backgroundColor: 'green',
	},
	addInput: {
		backgroundColor: colors.white,
		flex: 1,
		marginRight: 10,
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 5,
		borderWidth: 4,
		borderColor: colors.black,
	},

	// MAIN
	main: {
		flex: 5,
		backgroundColor: colors.black,
		opacity: 0.9,
		marginVertical: 10,
	},
	headerComponent: {},

	// FOOTER
	footer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		//backgroundColor: 'purple',
	},

	// Modal
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		marginHorizontal: 32,
		opacity: 0.969,
		borderRadius: 5,
		paddingHorizontal: 35,
		paddingVertical: 50,
		alignItems: 'center',
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		backgroundColor: '#000000',
	},

	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalTextEdit: {
		marginBottom: 15,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		color: colors.white,
	},
	modalTextDelete: {
		marginBottom: 15,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		color: colors.black,
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
});
