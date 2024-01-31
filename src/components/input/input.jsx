import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Arrow from "react-native-vector-icons/Entypo";

export const Input = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [areTasksChecked, setAreTasksChecked] = useState(false);

  const addNewTask = () => {
    if (title.trim() !== "") {
      const newTask = {
        title,
        id: new Date().getTime(), 
        status: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTitle("");
    }
  };

  const setAllTasksStatus = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      status: !areTasksChecked,
    }));
    setTasks(updatedTasks);
    setAreTasksChecked(!areTasksChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={setAllTasksStatus}>
          <Arrow name="chevron-down" size={30} color="#777777" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        value={title}
        onChangeText={(text) => setTitle(text)}
        onSubmitEditing={addNewTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    minHeight: 60,
    borderWidth: 1,
    borderColor: "#c4c2c23a",
  },
  containerFocused: {
    borderColor: "#b83f45",
  },
  arrow: {
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 24,
    fontStyle: "italic",
    color: "#989898",
    paddingLeft: 20,
  },
  inputFocused: {
    borderColor: "#b83f45",
  },
});
