import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { name: "Vegetables", image: require("./beetroot.png") },
    { name: "Dairies", image: require("./dairies.png") },
    { name: "Meats", image: require("./meats.png") },
    { name: "Fruits", image: require("./fruit.png") },
  ];

  const popularItems = [
    { name: "Beetroot", price: "Rs.2500", image: require("./beetroot.png") },
    { name: "Broccoli", price: "Rs.3000", image: require("./broccoli.png") },
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>

      {/* Categories Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>CATEGORIES</Text>
        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>
      <View style={styles.categories}>
        {categories.map((item, index) => (
          <TouchableOpacity
            style={styles.categoryItem}
            key={index}
            onPress={() =>
              item.name === "Fruits" ? navigation.navigate("Fruits") : null
            }
          >
            <View style={styles.categoryCircle}>
              <Image source={item.image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Deals Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>DEALS</Text>
        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>
      <View style={styles.dealsContainer}>
        <View style={styles.dealCard}>
          <View style={styles.dealTextContainer}>
            <Text style={styles.dealTitle}>Get 40% discount</Text>
            <Text style={styles.dealSubtitle}>on your first order from app.</Text>
            <TouchableOpacity style={styles.shopNowButton}>
              <Text style={styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("./fruit.png")} style={styles.dealImage} />
        </View>
      </View>

      {/* Popular Items Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>POPULAR ITEMS</Text>
        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>
      <View style={styles.popularItems}>
        {popularItems.map((item, index) => (
          <View style={styles.popularItem} key={index}>
            <Image source={item.image} style={styles.popularImage} />
            <View style={styles.popularTextContainer}>
              <Text style={styles.popularName}>{item.name}</Text>
              <Text style={styles.popularPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="home" size={24} color="green" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="heart" size={24} color="#666" />
          <Text style={styles.footerText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="shopping-cart" size={24} color="#666" />
          <Text style={styles.footerText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="user" size={24} color="#666" />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 16 },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 3,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  seeAll: { fontSize: 14, color: "green", textDecorationLine: "underline" },
  categories: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  categoryItem: { alignItems: "center" },
  categoryCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  categoryImage: { width: 50, height: 50, borderRadius: 25 },
  categoryText: { marginTop: 8, fontSize: 14, color: "#333" },
  dealsContainer: { marginBottom: 20, alignItems: "center" },
  dealCard: {
    flexDirection: "row",
    backgroundColor: "#32CD32",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
    width: "95%",
  },
  dealTextContainer: { flex: 1, paddingRight: 10 },
  dealTitle: { fontSize: 18, fontWeight: "bold", color: "white", marginBottom: 5 },
  dealSubtitle: { fontSize: 14, color: "white", marginBottom: 15 },
  shopNowButton: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  shopNowText: { fontSize: 14, fontWeight: "bold", color: "#32CD32" },
  dealImage: { width: 100, height: 100, borderRadius: 10 },
  popularItems: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  popularItem: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    elevation: 3,
  },
  popularImage: { width: "100%", height: 100, borderRadius: 10, marginBottom: 10 },
  popularTextContainer: { alignItems: "center" },
  popularName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  popularPrice: { fontSize: 14, color: "#999", marginTop: 4 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "white",
  },
  footerButton: { alignItems: "center" },
  footerText: { fontSize: 12, color: "#666", marginTop: 4 },
});

export default HomeScreen;
