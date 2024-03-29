import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TaskItem, Input, Header, tasks } from "@components";

export const AllScreen = ({ tasks, setTasks, navigation }) => {
  // const [tasks, setTasks] = useState([]);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleToggle = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.taskList}>
        <Input tasks={tasks} setTasks={setTasks} />
        {tasks.map((el, key) => (
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
  taskList: {
    flexDirection: "column",
    width: "90%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 36,
    elevation: 0,
  },
});
