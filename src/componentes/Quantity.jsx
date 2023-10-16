import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import QuantityStyles from "../styles/QuantityStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={QuantityStyles.mainContainer}>
      <View style={QuantityStyles.quantityContainer}>
        <FontAwesome5 name="sort-amount-up-alt" size={24} color="#340068" />
        <Text style={QuantityStyles.label}>Cantidad</Text>
        <View style={QuantityStyles.inputContainer}>
          <TouchableOpacity onPress={decrementQuantity}>
            <View style={QuantityStyles.shadowBox}>
              <FontAwesome5 name="minus" size={10} color="black" />
            </View>
          </TouchableOpacity>
          <TextInput
            style={QuantityStyles.input}
            value={formatNumber(quantity)}
            onChangeText={(text) => {
              const num = parseInt(text);
              if (!isNaN(num)) {
                setQuantity(num);
              }
            }}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={incrementQuantity}>
            <View style={QuantityStyles.shadowBox}>
              <FontAwesome name="plus" size={10} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Quantity;
