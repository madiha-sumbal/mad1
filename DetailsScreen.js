import React, { useContext, useState } from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import CartContext from "./CartContext";

const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!item || !item.name) {
    return <Text style={styles.errorText}>Item details are unavailable.</Text>;
  }

  // Ensure the unit price is a valid number and default to $2 if not provided
  const unitPrice = Number(item.price) || 2;

  // Calculate the total price
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const handleAddToCart = () => {
    const cartItem = {
      ...item,
      price: unitPrice, // Ensure the price is passed to the cart
      quantity,
    };
    addToCart(cartItem);
    navigation.navigate("Cart"); // Navigate to the cart directly without showing the alert
  };

  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Price: ${unitPrice.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  image: { width: 120, height: 120, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  price: { fontSize: 18, color: "#888", marginBottom: 20 },
  quantityContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  buttonText: { fontSize: 18, fontWeight: "bold" },
  quantity: { marginHorizontal: 20, fontSize: 18, fontWeight: "bold" },
  totalPrice: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  errorText: { flex: 1, textAlign: "center", marginTop: 50, fontSize: 18, color: "red" },
});

export default DetailsScreen;
