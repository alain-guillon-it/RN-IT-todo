import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const sampleGoals = [
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
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text
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
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  redColor: {
    color: "crimson",
  },
  textBold: {
    fontWeight: 900,
  },
});
