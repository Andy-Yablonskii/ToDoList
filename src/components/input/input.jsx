import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Arrow from "react-native-vector-icons/Entypo";

export const Input = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity>
          <Arrow name="chevron-down" size={30} color="#777777" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="What needs to be done?"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
    maxWidth: "90%",
    borderWidth: 1,
    borderColor: "#c4c2c23a",
  },
  containerFocused: {
    borderColor: "#b83f45",
  },
  checkboxContainer: {
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
