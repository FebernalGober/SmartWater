import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import SellButtonStyles from "../styles/SellButtonStyles";

export default function SellButton() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={SellButtonStyles.container}>
      <TouchableOpacity
        style={[
          SellButtonStyles.button,
          isPressed ? SellButtonStyles.pressedButton : null,
        ]}
        onPress={handlePress}
      >
        <Text style={SellButtonStyles.buttonText}>Vender</Text>
      </TouchableOpacity>
    </View>
  );
}
