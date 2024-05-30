import React, { useState } from "react";
import uuid from "react-native-uuid";
import { StyleSheet, View, FlatList } from "react-native";
import AddInput from "./components/InputBar";
import CheckList from "./components/CheckList";
import Header from "./components/ListHeader";

export default function App() {
  const [data, setData] = useState([]);

  const addItem = (text) => {
    setData([
      ...data,
      {
        value: text,
        key: uuid.v4(),
        isChecked: false,
        isEditing: false,
      },
    ]);
  };
  const deleteItem = (key) => {
    setData((prevTodo) => {
      // creates copy of array without the specified key todo item
      return prevTodo.filter((todo) => todo.key != key);
    });
  };
  const toggleItem = (key) => {
    setData(
      // creates copy of array. if key is the same, change isChecked to opposite.
      // Otherwise dont do anything with todo item
      data.map((todo) =>
        todo.key === key ? { ...todo, ["isChecked"]: !todo.isChecked } : todo
      )
    );
  };
  const editItem = (key, text) => {
    // console.log(data);
    // Change text value to modified text
    setData(
      data.map((todo) =>
        todo.key === key ?  todo.value = text  : todo
      )
    );
    // console.log(data);
  };
  const startEditingItem = (key) => {
    // allow/disallow editing of specified list item
    setData(
      data.map((todo) =>
        todo.key === key ? { ...todo, ["isEditing"]: !todo.isEditing } : todo
      )
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <CheckList
              item={item}
              deleteItem={deleteItem}
              toggleItem={toggleItem}
              editItem={editItem}
              startEditingItem={startEditingItem}
            />
          )}
        />
        <View style={styles.inputBar}>
          <AddInput addItem={addItem}></AddInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3E50B4",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
