import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Modal, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faClipboardList,
    faPenToSquare,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';

function Todo({ todo, i, handleDeleteTodoParent, handleClickTodoParent }) {
    // Création des modals
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

    // Edite Todo
    const [editedTodo, setEditedTodo] = useState(todo);

    // CONFIRMATION SUPPRESSION D'UNE TÂCHE
    function deleteThisTodo(index) {
        handleDeleteTodoParent(index);
        setModalDeleteVisible(!modalDeleteVisible);
    }

    function editThisTodo(index) {
        handleClickTodoParent(editedTodo);
        setModalEditVisible(!modalEditVisible);
    }

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
                <FontAwesomeIcon icon={faClipboardList} size={32} />
                <Text style={styles.item}>{todo}</Text>
                <View>
                    {/* Supprimer */}
                    <Pressable
                        style={[styles.button, styles.buttonOpenDelete]}
                        onPress={() => setModalDeleteVisible(true)}
                    >
                        <Text style={styles.textStyle}>
                            <FontAwesomeIcon icon={faTrash} style={{ color: 'white' }} />
                        </Text>
                    </Pressable>

                    {/* Editer */}
                    <Pressable
                        style={[styles.button, styles.buttonOpenEdit]}
                        onPress={() => setModalEditVisible(true)}
                    >
                        <Text style={styles.textStyle}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{ color: 'white' }}
                            />
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
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, styles.modalViewEdit]}>
                            <Text style={styles.modalTextEdit}>Mise à jour</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <TextInput
                                    onChangeText={(text) => setEditedTodo(text)}
                                    value={editedTodo}
                                    style={styles.inputAdd}
                                ></TextInput>
                                <Pressable
                                    style={[styles.button]}
                                    onPress={() => editThisTodo(i)}
                                >
                                    <Text style={{ color: 'white' }}>confirmer</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            {/* Modal DELETE */}
            <View style={styles.centeredView}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalDeleteVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalDeleteVisible(!modalDeleteVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, styles.modalViewDelete]}>
                            <Text style={styles.modalTextEdit}>
                                Souhaitez-vous réellement supprimer votre tâche ?
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setModalDeleteVisible(!modalDeleteVisible)
                                    }
                                >
                                    <Text style={styles.textStyle}>Annuler</Text>
                                </Pressable>

                                <Pressable
                                    style={[
                                        styles.button,
                                        styles.buttonClose,
                                        styles.buttonConfirm,
                                    ]}
                                    onPress={() => deleteThisTodo(i)}
                                >
                                    <Text style={{ color: 'white' }}>confirmer</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
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

    // Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 15,
        opacity: 0.9,
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewEdit: {
        backgroundColor: '#E2C290',
    },
    modalViewDelete: {
        backgroundColor: '#F0386B',
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 1,
    },
    buttonOpenDelete: {
        backgroundColor: '#F0386B',
    },
    buttonOpenEdit: {
        backgroundColor: '#E2C290',
    },
    buttonClose: {
        backgroundColor: '#616161',
        marginRight: 10,
    },
    buttonConfirm: {
        backgroundColor: '#6B2D5C',
        marginLeft: 10,
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
        color: 'black',
    },
    modalTextDelete: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
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
