import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CheckList({
  item,
  deleteItem,
  toggleItem,
  editItem,
  startEditingItem,
}) {
  const [value, setValue] = useState(item.value);
  const onChangeText = (text) => {
    setValue(text);
  };

  const cancelEdit = () => {
    setValue(item.value);
    startEditingItem(item.key);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!item.isEditing) {
          toggleItem(item.key);
        }
      }}
    >
      <View
        style={
          !item.isChecked ? styles.listContainer : styles.listContainerStriked
        }
      >
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            if (!item.isEditing) {
              toggleItem(item.key);
            }
          }}
        >
          <View style={styles.icon}>
            <Feather
              name={!item.isChecked ? "circle" : "check-circle"}
              size={20}
              color="#FF3F80"
            />
          </View>
        </TouchableOpacity>
        <View>
          <TextInput
            style={!item.isChecked ? styles.listItem : styles.listItemStriked}
            onChangeText={onChangeText}
            editable={!item.isEditing ? false : true}
            multiline={true}
          >
            {/* {item.value} */}
            {value}
          </TextInput>
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            if (item.isEditing) {
              editItem(item.key, value);
            }
            startEditingItem(item.key);
          }}
        >
          <MaterialCommunityIcons
            name="circle-edit-outline"
            size={26}
            color={!item.isEditing ? "#FF3F80" : "black"}
            style={styles.icon}
          />
        </TouchableOpacity>
        {item.isEditing && (
          <TouchableOpacity
            style={styles.cancelContainer}
            onPress={() => cancelEdit()}
          >
            <MaterialCommunityIcons
              name="cancel"
              size={26}
              color="#FF3F80"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => deleteItem(item.key)}
        >
          <MaterialCommunityIcons
            name="delete-forever-outline"
            size={28}
            color="#FF3F80"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    alignItems: "center",
  },
  listContainer: {
    backgroundColor: "white",
    height: "auto",
    width: 350,
    marginBottom: 25,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  listContainerStriked: {
    backgroundColor: "grey",
    height: "auto",
    width: 350,
    marginBottom: 25,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  listItem: {
    color: "black",
    width: 235,
    height: "auto",
    fontSize: 20,
    // marginTop: 10,
    marginRight: 10,
  },
  listItemStriked: {
    color: "black",
    width: 235,
    height: "auto",
    fontSize: 20,
    // marginTop: 10,
    marginRight: 15,
    textDecorationLine: "line-through",
  },
  listCategory: {
    color: "red",
    width: 40,
    fontSize: 15,
    marginRight: 20,
    borderRadius: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 15,
    // marginRight: 10,
    height: 40,
    borderRadius: 10,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: 5,
  },
  cancelContainer: {
    alignItems: "center",
    justifyContent: "center",
    // bottom: 30,
    // right: 27,
    // marginTop: 15,
    position: "relative",
    height: 40,
    borderRadius: 10,
  },
});
