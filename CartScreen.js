import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet, Image } from "react-native";
import CartContext from "./CartContext";

const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleConfirmPayment = () => {
    // Your payment confirmation logic here (e.g., navigate to a payment screen)
    console.log("Payment confirmed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const unitPrice = Number(item.price) || 2; // Default price is $2
            const itemTotalPrice = (unitPrice * item.quantity).toFixed(2);

            return (
              <View style={styles.item}>
                {/* Item Image */}
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.itemDetails}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>
                    Price: ${unitPrice.toFixed(2)}
                  </Text>
                  <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                  <Text style={styles.itemTotal}>
                    Total: ${itemTotalPrice}
                  </Text>
                </View>
                <Button
                  title="Remove"
                  onPress={() => removeFromCart(item.id)}
                  color="#e74c3c"
                />
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            source={require("./assets/emptycart.png")} // Replace with the correct path
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>Your cart is empty!</Text>
        </View>
      )}
      {cart.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button title="Clear Cart" onPress={clearCart} color="#3498db" />
          <View style={styles.buttonSpacing} />
          <Button
            title="Confirm Payment"
            onPress={handleConfirmPayment}
            color="#2980b9" // Blue color for the Confirm Payment button
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  quantity: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  itemTotal: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    color: "#777",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonSpacing: {
    height: 10, // Adjust the height to your liking for spacing
  },
});

export default CartScreen;
