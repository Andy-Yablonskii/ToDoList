import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TaskItem, Header } from "@components";

export const ActiveScreen = ({ navigation, tasks, setTasks }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleToggle = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Header />
      {tasks
        .filter((el) => !el.status)
        .map((el, key) => (
          <TaskItem
            key={key}
            taskName={el.title}
            isChecked={el.status}
            id={el.id}
            tasks={tasks}
            setTasks={setTasks}
            onToggle={handleToggle}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
