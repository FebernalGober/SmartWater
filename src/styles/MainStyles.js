import { StyleSheet } from "react-native";

const MainStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 30,
  },

  title: {
    position: "absolute",
    top: "60%",
    fontSize: 24,
    color: "#340068",
    fontFamily: "CorbelBold",
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    paddingLeft: 22,
    color: "#340068",
    fontFamily: "CorbelBold",
  },
  icon: {
    flex: 1,
    paddingLeft: 18,
  },
  containerMid: {
    justifyContent: "center",
    paddingTop: 70,
  },
});

export default MainStyles;
