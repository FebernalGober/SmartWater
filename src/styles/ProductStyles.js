import { StyleSheet } from "react-native";

const ProductStyles = StyleSheet.create({
  container: {
    
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    paddingBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 16,
    padding: 0,
    margin: 0,
    width: 270,
    height: 40,
  },
  icon: {
    marginLeft: 10,
  },
  listItem: {
    borderColor: "lightgray",
  
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 300,
    position: 'absolute',
    top: 150,
   
  },
});

export default ProductStyles;
