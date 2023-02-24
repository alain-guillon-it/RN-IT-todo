import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import Todo from "./Components/Todo";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const image = {
  uri: "https://e0.pxfuel.com/wallpapers/1023/612/desktop-wallpaper-nature-minimalist-dark-iphone-2160x3840-mobile-nature.jpg",
};

export default function App() {
  // STEP-2 & 3

  // Liste des tâches
  const [todo, setTodo] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 25 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
    "Apprendre React Native",
    "Apprendre NodeJS",
    "Apprendre React",
    "Apprendre NextJS",
    "Apprendre Symfony",
  ]);

  // Edition de l'input texte
  const [newTodo, setNewTodo] = useState("");

  // A
  function handleClickTodo() {
    if (newTodo.trim() === "") {
      return;
    }
    setTodo([...todo, newTodo]);
    setNewTodo("");
  }

  function handleDeleteTodo(index) {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {/* STEP - 4 */}

          <Text
            style={{
              fontSize: 32,
              textAlign: "center",
              marginVertical: 16,
              color: "white",
            }}
          >
            My Todo List
          </Text>

          {/* PARTIE AJOUT D'UNE TÂCHE */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              onChangeText={(text) => setNewTodo(text)}
              value={newTodo}
              style={styles.inputAdd}
              placeholder="Add a new todo"
            ></TextInput>

            <Pressable
              android_ripple={{
                color: "blue",
                radius: 50,
              }}
              style={{
                width: "20%",
                backgroundColor: "skyblue",
                alignItems: "center",
                paddingTop: 9,
              }}
              onPress={handleClickTodo}
            >
              <Text style={styles.add}>Coucou</Text>
            </Pressable>
          </View>

          {/* PARTIE AFFICHAGE DE LA LISTE */}
          <View
            style={{
              marginVertical: 16,
            }}
          >
            {todo && (
              <FlatList
                data={todo}
                renderItem={({ item, index }) => (
                  <Todo
                    i={index}
                    todo={item}
                    handleDeleteTodoParent={(index) => handleDeleteTodo(index)}
                  />
                )}
              ></FlatList>
            )}
          </View>

          <StatusBar style="auto" />
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
    color: "white",
  },
  redColor: {
    color: "crimson",
  },
  textBold: {
    fontWeight: 900,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  inputAdd: {
    height: 40,
    borderWidth: 3,
    borderColor: "black",
    padding: 10,
    flex: 1,
    marginRight: 10,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    fontSize: 16,
    height: 35,
    flex: 1,
    marginRight: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
