import { StyleSheet } from "react-native";

const QuantityStyles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 14,
    paddingBottom: 5,
    paddingTop: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
  label: {
    fontSize: 16,
    paddingLeft: 15,
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  input: {
    fontSize: 16,
    padding: 10,
    margin: 0,
  },
  shadowBox: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuantityStyles;
