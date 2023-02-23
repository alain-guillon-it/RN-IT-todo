import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Separator,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  // STEP-2

  const [todo, onChangeTodo] = useState([
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
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* STEP - 1 */}

      {/* <Text
        style={{
          fontWeight: "900",
        }}
      >
        Je suis un premier message
      </Text>

      <Text
        style={{
          color: "crimson",
        }}
      >
        Et moi un second message
      </Text> */}

      {/* STEP - 2 */}

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
          onChangeText={onChangeTodo}
          value={todo}
          style={styles.input}
          placeholder="Add a new todo"
        ></TextInput>

        <Button
          title="Add"
          style={{
            width: 25,
          }}
          // onClick={handleClickTodo}
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
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          ></FlatList>
        )}
      </View>

      <StatusBar style="auto" />
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
    width: 280,
  },
  item: {
    paddingHorizontal: 1,
    fontSize: 18,
    height: 44,
  },
});
