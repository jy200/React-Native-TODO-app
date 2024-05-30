import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.header}>To-Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
      height: 100,
      marginLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    header: {
      color: "white",
      fontSize: 30,
    },
  });