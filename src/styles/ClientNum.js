import { StyleSheet } from "react-native";

const ClientNumstyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
  },
  container: {
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
  inputContainer: {
    marginLeft: 5,
  },
  label: {
    fontSize: 16,
  },
  input: {
    fontSize: 16,
    padding: 0,
    margin: 0,
    width: 300,
    borderBottomWidth: 1,
    height: 40,
  },
});

export default ClientNumstyles;
