import React from "react";
import { View, TextInput } from "react-native";
import { Foundation } from "@expo/vector-icons";
import ClientNumstyles from "../styles/ClientNum";

const Price = () => {
  return (
    <View style={ClientNumstyles.mainContainer}>
      <Foundation name="dollar" size={24} color="#340068" />
      <View style={ClientNumstyles.container}>
        <View style={ClientNumstyles.inputContainer}>
          <TextInput
            style={ClientNumstyles.input}
            placeholder="Agregar precio"
          />
        </View>
      </View>
    </View>
  );
};

export default Price;
