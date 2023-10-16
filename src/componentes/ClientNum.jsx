import React from "react";
import { View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ClientNumstyles from "../styles/ClientNum";

const ClientNum = () => {
  return (
    <View style={ClientNumstyles.mainContainer}>
      <FontAwesome name="user-circle-o" size={24} color="#340068" />
      <View style={ClientNumstyles.container}>
        <View style={ClientNumstyles.inputContainer}>
          <TextInput
            style={ClientNumstyles.input}
            placeholder="Numero de cliente"
          />
        </View>
      </View>
    </View>
  );
};

export default ClientNum;
