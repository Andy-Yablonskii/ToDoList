import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import CheckBox from "react-native-vector-icons/Feather";

export const TaskItem = ({
  taskName,
  isChecked,
  id,
  tasks,
  setTasks,
  onToggle,
}) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(id, !isChecked); // Pass the id and the new status
    }
  };

  const handleDelete = () => {
    if (setTasks) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            name={isChecked ? "check-circle" : "circle"}
            size={26}
            color={isChecked ? "#b83f45" : "#777777"}

          />
        </View>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <TouchableOpacity onPress={handleToggle}>
          <Text style={[styles.taskName, isChecked && styles.crossedText]}>
            {taskName}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleDelete}>
          <CheckBox name="x-circle" size={26} color={"#777777"} />
        </TouchableOpacity>
      </View>
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
  taskName: {
    fontSize: 23,
    color: "#000",
  },
  crossedText: {
    textDecorationLine: "line-through",
    color: "#949494",
  },
});
