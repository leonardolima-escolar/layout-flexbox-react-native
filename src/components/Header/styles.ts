import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#c4c4c4",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
});
