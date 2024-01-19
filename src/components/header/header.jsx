import { View, Text, StyleSheet } from "react-native";

export const Header = (header) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    fontSize: 80,
    color: "#b83f45",
    marginBottom: 16,
  },
});


