// Dependancies
import {useState, useEffect} from 'react';
import {Keyboard, Modal, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClipboardList, faPenToSquare, faTrash,} from '@fortawesome/free-solid-svg-icons';

// Colors config
const colors = {
    black: '#333333',
    white: '#F1F1F1',
    blue: '#0000FF',
    red: '#FA8072',
    gold: '#FFD700',
    transparent: 'transparent',
    grey: "#777777"
}

function Task({ i, task, deleteOneTask, editOneTask }) {

    // Modals Status
    const [ modalEditVisible, setModalEditVisible ] = useState( false );
    const [ modalDeleteVisible, setModalDeleteVisible ] = useState( false );

    // Input Init
    const [ initialInput, setInitialInput ] = useState( task );

    // Mise à jour du formulaire de mise à jour :D
    useEffect(() => {
        setInitialInput( task )
    }, [task])

    return (
        <>
            <View
                style={[
                    styles.row,
                    {
                        marginVertical: 4,
                        backgroundColor: colors.white,
                        padding: 8,
                    },
                ]}
            >
                <View style={{width: '10%'}}>
                    <Text>
                        {' '}
                        <FontAwesomeIcon
                            icon={faClipboardList}
                            size={18}
                        />
                    </Text>
                </View>
                <View style={{width: '65%'}}>
                    <Text>{task}</Text>
                </View>
                <View style={[styles.row, styles.justifyBetween, {width: '25%'}]}>
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
                                style={{color: colors.black}}
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
                                style={{color: colors.black}}
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
                    visible={ modalEditVisible }
                    /*onRequestClose={() => {
                        setModalEditVisible( !modalEditVisible );
                    }}*/
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.modalText]}>
                                Vous êtes sur le point de modifier une tâche.
                            </Text>
                            <TextInput
                                style={[styles.input ]}
                                value={ initialInput }
                                onChangeText={ (text) => setInitialInput(text) }
                            />
                            <View style={[styles.row, styles.justifyAround]}>
                                <Pressable
                                    style={[styles.btnLarge, styles.btnWarning]}
                                    onPress={ () => {
                                        editOneTask(i, initialInput );
                                        Keyboard.dismiss();
                                        setInitialInput( initialInput );
                                        setModalEditVisible( !modalEditVisible )
                                    }}
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
                    transparent={ true }
                    visible={ modalDeleteVisible }
                    onRequestClose={() => setModalDeleteVisible( !modalDeleteVisible ) }
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.modalText]}>
                                Souhaitez-vous réellement supprimer votre tâche ?
                            </Text>
                            <View style={[styles.row, styles.justifyAround]}>
                                <Pressable
                                    style={[styles.btnLarge, styles.btnWarning]}
                                    onPress={() =>
                                        setModalDeleteVisible( !modalDeleteVisible )
                                    }
                                >
                                    <Text style={styles.btnText}>Annuler</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.btnLarge, styles.btnDanger]}
                                    onPress={ () => {
                                        deleteOneTask( i );
                                        setModalDeleteVisible( !modalDeleteVisible );
                                    }}
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
    input: {
        backgroundColor: colors.white,
        marginBottom: 15,
        minWidth: "100%",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: colors.grey,
        fontStyle: "italic"
    },
    btn: {
        borderRadius: 5,
        elevation: 1,
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
    btnDanger: {
        backgroundColor: colors.red,
    },
    btnWarning: {
        backgroundColor: colors.gold,
    },
    btnSecondary: {
        backgroundColor: colors.grey,
    },

    // MODAL
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
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
    },
});
