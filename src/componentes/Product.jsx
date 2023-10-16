import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Modal,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ProductStyles from "../styles/ProductStyles";
import axios from "axios";

const Product = ({ token }) => {
  const [inputValue, setInputValue] = useState("");
  const [isListVisible, setListVisible] = useState(false);
  const [products, setProducts] = useState([]);
  console.log("Token", token);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(
          "https://smartwater101.herokuapp.com/v1/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);
        console.log("Inicio de sesión exitoso", response.data);
      } catch (error) {
        console.error("Error al cargar los productos", error);
      }
    };

    loadProducts();
  }, [token]);
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const handleSuggestionSelect = (suggestion) => {
    setInputValue(suggestion);
    setListVisible(false);
  };

  return (
    <View style={ProductStyles.container}>
      <FontAwesome5
        name="wine-bottle"
        size={24}
        color="#340068"
        style={{ transform: [{ rotate: "-45deg" }] }}
      />
      <View style={ProductStyles.inputContainer}>
        <TextInput
          style={ProductStyles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="Producto"
        />
        <TouchableOpacity
          style={ProductStyles.icon}
          onPress={toggleListVisibility}
        >
          <Entypo name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isListVisible}
        onRequestClose={() => {
          setListVisible(false);
        }}
      >
        <View style={ProductStyles.centeredView}>
          <View style={ProductStyles.modalView}>
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSuggestionSelect(item)}>
                  <Text style={ProductStyles.listItem}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={toggleListVisibility}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Product;
