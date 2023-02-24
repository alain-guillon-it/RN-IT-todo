import { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Pressable,
    Alert,
    Modal,
    Separator,
} from 'react-native';

function Todo({ todo, i, handleDeleteTodoParent }) {
    // Création de la modal
    const [modalVisible, setModalVisible] = useState(false);

    function deleteThisTodo(index) {
        handleDeleteTodoParent(index);
        setModalVisible(!modalVisible);
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
                <Text style={styles.item}>{todo}</Text>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Supprimer</Text>
                </Pressable>
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType='sidel'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                Souhaitez-vous supprimer votre tâche ?
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
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
        height: 35,
        flex: 1,
        marginRight: 10,
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
        margin: 20,
        backgroundColor: 'grey',
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
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: 'crimson',
    },
    buttonClose: {
        backgroundColor: '#A1A1A1',
		marginRight: 10
    },
    buttonConfirm: {
        backgroundColor: 'crimson',
		marginLeft: 10
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
