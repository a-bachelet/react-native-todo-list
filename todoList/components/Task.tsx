import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task(props: { text: string }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 53,
    borderColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 20,
    shadowOpacity: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(47, 105, 255, 0.4)",
    borderRadius: 5,
    marginRight: 20,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 14,
    lineHeight: 16,
    color: "#1A1A1A",
  },
  circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#2F69FF",
    borderRadius: 5,
  },
});
