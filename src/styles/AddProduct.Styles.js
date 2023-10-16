import { StyleSheet } from "react-native";

const AddProductStyles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  text: {
    marginTop: 10,
    textAlign: "center",
    color: "gray",
  },
  main: {
    alignItems: "center",
  },
});

export default AddProductStyles;
