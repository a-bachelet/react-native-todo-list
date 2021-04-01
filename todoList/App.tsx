import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  // Data
  const [tasks, setTasks] = useState<string[]>([]);

  // States
  const [task, setTask] = useState<string>("");

  // Logic
  const addTask = () => {
    setTasks([...tasks, task.toString()]);
    setTask("");
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.tasksSection}>
        <Text style={styles.title}>Todo today</Text>
        <View style={styles.tasksList}>
          {tasks.map((t) => {
            return <Task text={t} key={t.toString()}></Task>;
          })}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a task"
          onChangeText={(newText) => setTask(newText)}
          value={task}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <View style={styles.addButtonView}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
    flexDirection: "column",
    justifyContent: "space-between",
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
  bottomContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    height: 45,
    backgroundColor: "#FFF",
    width: 246,
    borderRadius: 60,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 20,
    shadowOpacity: 0.1,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 20,
    shadowOpacity: 0.1,
    width: 60,
    height: 60,
  },
  addButtonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#55BCF6",
    fontSize: 45,
    lineHeight: 45,
  },
});
