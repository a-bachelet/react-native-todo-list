import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksSection}>
        <Text style={styles.title}>Todo today</Text>
        <View style={styles.tasksList}>
          <Task text="😂 First Task"></Task>
          <Task text="🚀 Second Task"></Task>
          <Task text="🐱‍🐉 Third Task"></Task>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  tasksList: {
    flexDirection: "column",
    alignItems: "stretch",
  },
});
