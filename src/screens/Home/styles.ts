import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    backgroundColor: "#73779e",
    flex: 8,
    width: "100%",
    paddingHorizontal: "10%",
    paddingVertical: "8%",
  },

  section: {
    backgroundColor: "#8a8fc3",
    flex: 1,
    paddingHorizontal: "10%",
    paddingVertical: "3%",
    justifyContent: "space-around",
  },

  article: {
    backgroundColor: "#b2b9ff",
    flex: 1,
    marginVertical: "5%",
    paddingHorizontal: "8%",
    paddingVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
