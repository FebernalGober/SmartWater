import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import MainStyles from "../styles/MainStyles";
import ClientNum from "../componentes/ClientNum";
import Price from "../componentes/Price";
import Product from "../componentes/Product";
import Quantity from "../componentes/Quantity";
import AddProduct from "../componentes/AddProduct";
import { Ionicons } from "@expo/vector-icons";
import SellButton from "../componentes/SellButton";
import axios from "axios";

const Main = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loginData = {
      phoneNumber: "+59171717171",
      password: "123456",
    };

    axios
      .post("https://smartwater101.herokuapp.com/v1/users/login", loginData)
      .then((response) => {
        console.log("Inicio de sesión exitoso", response.data);

        setToken(response.data.token);
      })
      .catch((error) => {
        console.error("Error de inicio de sesión", error);
      });
  }, []);

  StatusBar.setHidden(true);

  return (
    <View>
      <View style={MainStyles.titleContainer}>
        <Ionicons
          name="menu-outline"
          size={30}
          color="#340068"
          style={MainStyles.icon}
        />
        <Text style={MainStyles.title}>SMART WATER</Text>
      </View>
      <Text style={MainStyles.subtitle}>Registrar nuevo venta</Text>
      <ClientNum />
      <Product token={token} />
      <Quantity />
      <Price />
      <View style={MainStyles.containerMid}>
        <AddProduct />
        <SellButton />
      </View>
    </View>
  );
};

export default Main;
