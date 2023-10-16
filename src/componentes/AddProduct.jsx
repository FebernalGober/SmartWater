import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AddProductStyles from "../styles/AddProduct.Styles";

const AddProduct = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={AddProductStyles.main}>
        <View style={AddProductStyles.circle}>
          <FontAwesome5 name="plus" size={24} color="#340068" />
        </View>
        <Text style={AddProductStyles.text}>Agregar otro producto</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddProduct;
