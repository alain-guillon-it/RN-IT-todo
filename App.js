// Dependancies
import {useState } from 'react';
import {StatusBar} from 'expo-status-bar';
import {
    FlatList,
    ImageBackground,
    Keyboard,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus,} from '@fortawesome/free-solid-svg-icons';
import Task from './Components/Task';

// Original TaskList
const defaultTaskList = [
    'Faire les courses',
    'Aller à la salle de sport 3 fois par semaine',
    'Monter à plus de 5000m d altitude',
    'Acheter mon premier appartement',
    'Perdre 25 kgs',
    'Gagner en productivité',
    'Apprendre un nouveau langage',
    'Faire une mission en freelance',
    'Organiser un meetup autour de la tech',
    'Faire un triathlon',
    'Apprendre React Native',
    'Apprendre NodeJS',
    'Apprendre React',
    'Apprendre NextJS',
    'Apprendre Symfony',
];

// Background Image
const backgroundUI = {
    uri: 'https://diapogram.com/upload/2018/04/10/20180410133409-7ff8c878.jpg',
};

// color config
const colors = {
    black: '#333333',
    white: '#F1F1F1',
    blue: '#0000FF',
    red: '#FA8072',
    gold: '#FFD700',
    transparent: 'transparent',
    grey: "#777777"
};

// STEP 5
export default function App() {

    // data
    const [taskList, setTaskList] = useState([...defaultTaskList]);

    // user prompt
    const [input, setInput] = useState('');

    // add a new task
    const fct_AddNewTask = () => {
        if (input.trim() === '') return;
        setTaskList([...taskList, input] );
        setInput('');
        Keyboard.dismiss()
    };

    // update one task
    const fct_EditOneTask = ( indexPosition, updateInput ) => {
        const updatedTaskList = taskList.map(
            ( currentTask, indexMap) => indexMap === indexPosition ? updateInput : currentTask
        )
        setTaskList(
            updatedTaskList
        );
    };

    const fct_DeleteOneTask = (indexPositionThisTask) => {
        const updatedTaskList = [ ...taskList ]
        updatedTaskList.splice(indexPositionThisTask, 1)
        // console.log(updatedTaskList);
        setTaskList(
            updatedTaskList
        );
    };

    return (
        <>
            {/* BACKGROUND APP */}
            <ImageBackground
                source={backgroundUI}
                resizeMode='cover'
                style={styles.backgroundImage}
                alt="a background image here"
            >
                <SafeAreaView style={styles.body}>
                    {/* HEADER */}
                    <View style={[styles.header]}>
                        {/* H1 */}
                        <Text style={styles.h1}>IT-Task Manager</Text>

                        {/* INPUT TEXT + BTN */}
                        <View style={styles.row}>

                            {/* INPUT ADD TASK */}
                            <TextInput
                                onChangeText={(todo) => setInput(todo)}
                                value={ input }
                                style={ styles.input }
                                placeholder='Add a new task here...'
                            ></TextInput>

                            {/* BUTTON + ICON FONT_AWESOME */}
                            <Pressable
                                style={[styles.btn, styles.btnInfo, styles.btnLarge]}
                                android_ripple={{
                                    color: colors.gold,
                                    radius: 50,
                                }}
                                onPress={ fct_AddNewTask }
                            >
                                {/* ICON */}
                                <Text>
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        size={24}
                                        style={{
                                            color: colors.white,
                                        }}
                                    />
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* MAIN */}
                    <View style={[styles.main]}>
                        {taskList && (
                            <FlatList
                                data={taskList}
                                style={{
                                    backgroundColor: colors.transparent,
                                    opacity: 0.9,
                                }}
                                ListHeaderComponent={
                                    <Text style={{textAlign: 'center', fontSize: 24}}>
                                        Tâches à réaliser
                                    </Text>
                                }
                                ListHeaderComponentStyle={{
                                    backgroundColor: colors.gold,
                                    paddingVertical: 4,
                                    color: colors.black,
                                }}
                                renderItem={({item, index}) => (
                                    <Task
                                        i={ index }
                                        task={ item }
                                        deleteOneTask={ fct_DeleteOneTask }
                                        editOneTask={ fct_EditOneTask }
                                    />
                                )}
                            ></FlatList>
                        )}
                    </View>

                    {/* FOOTER */}
                    <View style={[styles.footer]}>
                        <Text style={styles.h2}>By Alain GUILLON</Text>
                        {/* PLATEFORME */}
                        <View
                            style={[
                                styles.row,
                                styles.justifyBetween,
                                {paddingHorizontal: 16},
                            ]}
                        >
                            {/* PLATEFORME */}
                            <Text style={[styles.strong, styles.textDanger]}>
                                Plateforme:{'   '}
                                {Platform.OS === 'android' && (
                                    <Text style={[styles.em, styles.textLight]}>
                                        Androïd
                                    </Text>
                                )}
                                {Platform.OS === 'ios' && (
                                    <Text style={[styles.em, styles.textLight]}>IOS</Text>
                                )}
                                {Platform.OS === 'macos' && (
                                    <Text style={[styles.em, styles.textLight]}>
                                        MacOS
                                    </Text>
                                )}
                                {Platform.OS === 'web' && (
                                    <Text style={[styles.em, styles.textLight]}>Web</Text>
                                )}
                                {Platform.OS === 'windows' && (
                                    <Text style={[styles.em, styles.textLight]}>
                                        Windows
                                    </Text>
                                )}
                            </Text>

                            {/* VERSION */}
                            <Text style={[styles.strong, styles.textDanger]}>
                                Version:{'   '}
                                <Text style={[styles.em, styles.textLight]}>
                                    {Platform.Version}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
                {/* STATUS BAR WITH A WHITE COLOR SELECTED */}
                <StatusBar style='light'/>
            </ImageBackground>
        </>
    );
}

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
    input: {
        backgroundColor: colors.white,
        flex: 1,
        marginRight: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: 4,
        borderColor: colors.black,
    },
    btn: {
        borderRadius: 5,
        elevation: 1,
        borderWidth: 2,
        borderColor: colors.gold,
    },
    btnLarge: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    btnInfo: {
        backgroundColor: colors.black,
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
    },

    // MAIN
    main: {
        flex: 5,
        backgroundColor: colors.black,
        opacity: 0.9,
        marginVertical: 10,
    },

    // FOOTER
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
