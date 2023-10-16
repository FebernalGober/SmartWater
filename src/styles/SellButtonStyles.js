import { StyleSheet } from "react-native";

const SellButtonStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
  button: {
    backgroundColor: "#340068",
    padding: 10,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, //
    width: 350,
  },
  pressedButton: {
    backgroundColor: "darkblue",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "CorbelBold",
    textAlign: "center",
  },
});

export default SellButtonStyles;
