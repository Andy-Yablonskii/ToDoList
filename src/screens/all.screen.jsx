import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "../components";
import { Input } from "../components/input/input";
import { TaskItem } from "../components/toDoItem/taskItem";

export const AllScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <TaskItem />
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
