import { View, Text, Button, StyleSheet } from "react-native";

function Todo({ todo, i, handleDeleteTodoParent }) {
  return (
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
      <Text style={styles.item}>{todo}</Text>
      <Button
        title="X"
        color="crimson"
        style={{ elevation: 5 }}
        onPress={() => handleDeleteTodoParent(i)}
      ></Button>
    </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
