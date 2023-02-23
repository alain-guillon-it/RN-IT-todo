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
} from "react-native";
import { useState } from "react";

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* STEP - 2 ET 3 */}

        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
            marginVertical: 16,
          }}
        >
          My Todo List
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            onChangeText={(text) => setNewTodo(text)}
            value={newTodo}
            style={styles.input}
            placeholder="Add a new todo"
          ></TextInput>

          <Button
            title="Add"
            style={{
              width: "20%",
            }}
            onPress={handleClickTodo}
          ></Button>
        </View>

        <View
          style={{
            marginVertical: 16,
          }}
        >
          {todo && (
            <FlatList
              data={todo}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 5,
                    padding: 8,
                    borderWidth: 2,
                    border: 1,
                  }}
                >
                  <Text style={styles.item}>{item}</Text>
                  <Button
                    title="X"
                    color="crimson"
                    style={{ elevation: 5 }}
                    onPress={() => handleDeleteTodo(index)}
                  ></Button>
                </View>
              )}
            ></FlatList>
          )}
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
  },
  redColor: {
    color: "crimson",
  },
  textBold: {
    fontWeight: 900,
  },
  input: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginRight: 10,
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
