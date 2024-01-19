import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import CheckBox from "react-native-vector-icons/Feather";

export const TaskItem = () => {
  const [taskName, setTaskName] = useState("Temporary Task");
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleTextClick = () => {
    toggleCheckBox();
  };

  const handleDeleteTask = () => {
    // Implement task deletion logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCheckBox}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            name={isChecked ? "check-circle" : "circle"}
            size={26}
            color={isChecked ? "#b83f45" : "#777777"}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleTextClick} style={styles.textContainer}>
        <Text style={[styles.taskName, isChecked && styles.crossedText]}>
          {taskName}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDeleteTask} style={styles.deleteContainer}>
        <CheckBox name="x-circle" size={26} color="#777777" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#c4c2c23a",
    backgroundColor: "#fff",
    minWidth: "90%",
    minHeight: 60,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 13,
  },
  checkboxContainer: {
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  deleteContainer: {
    paddingRight: 13,
  },
  taskName: {
    fontSize: 23,
    color: "#000",
  },
  crossedText: {
    textDecorationLine: "line-through",
    color: "#949494",
  },
});
