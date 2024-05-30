import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export default function AddInput({ addItem }) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Task"
          onChangeText={onChangeText}
          style={styles.textInput}
          value={value}
          multiline={true}
        />
        {/* <TextInput
          placeholder="Category"
          onChangeText={onChangeText}
          style={styles.categoryInput}
          value={value}
        /> */}
      </View>
      <TouchableOpacity
        onPress={() => {
          addItem(value);
          setValue("");
          Keyboard.dismiss();
        }}
        style={styles.submitBtn}
      >
        <Text style={styles.submitText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 10,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "white",
    width: 300,
    marginRight: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  categoryInput: {
    fontSize: 16,
    backgroundColor: "#fafafa",
    width: 100,
    marginRight: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  submitBtn: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f50057",
    marginBottom: 20,
    borderRadius: 50,
    borderColor: "#f73378",
    borderWidth: 2,
    height: 50,
  },
  submitText: {
    color: "white",
    fontSize: 25,
  },
});
