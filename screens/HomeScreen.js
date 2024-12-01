import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { name: "Fruits", image: require("../assets/fruit.png"), screen: "Fruits" },
    { name: "Vegetables", image: require("../assets/vegetables.png"), screen: "Vegetables" },
    { name: "Dairies", image: require("../assets/dairies.png"), screen: "Dairies" },
    { name: "Meat", image: require("../assets/meats.png"), screen: "Meat" },
  ];

  const popularItems = [
    { name: "Beetroot", image: require("../assets/beetroot.png") },
    { name: "Broccoli", image: require("../assets/broccoli.png") },
    { name: "Banana", image: require("../assets/bannana.png") },
    { name: "Butter", image: require("../assets/butter.png") },
  ];

  const dealImages = [
    {
      uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18d60b107187879.5fa16aecd880f.jpg",
    },
    {
      uri: "https://media.istockphoto.com/id/1459390845/photo/online-grocery-shopping-and-delivery-banner.jpg?s=170667a&w=0&k=20&c=_r4iF2akM1DtMHu88yqh2O1-yCdWGU0m1hlqD0HzLts=",
    },
    {
      uri: "https://i.pinimg.com/originals/49/68/f8/4968f834c65580e19736f40e06ce67dd.jpg",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;

    const autoSlide = setInterval(() => {
      if (sliderRef.current) {
        currentIndex = (currentIndex + 1) % dealImages.length;
        sliderRef.current.scrollToIndex({ index: currentIndex, animated: true });
      }
    }, 2000);

    return () => clearInterval(autoSlide); // Cleanup
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products"
          placeholderTextColor="#999"
        />
      </View>

      {/* Categories Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
      </View>
      <View style={styles.categories}>
        {categories.map((item, index) => (
          <TouchableOpacity
            style={styles.categoryItem}
            key={index}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.categoryCircle}>
              <Image source={item.image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Deals Section with Slider */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Deals</Text>
      </View>
      <FlatList
        ref={sliderRef}
        data={dealImages}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.dealImage} />
        )}
        style={styles.slider}
      />

      {/* Popular Items Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
      </View>
      <FlatList
        data={popularItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <View style={styles.popularCircle}>
              <Image source={item.image} style={styles.popularImage} />
            </View>
            <Text style={styles.popularName}>{item.name}</Text>
          </View>
        )}
        style={styles.popularSlider}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingHorizontal: 16 },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 30,
    width: "95%",
    alignSelf: "center",
    elevation: 3,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },
  sectionHeader: { marginVertical: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#333" },
  categories: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  categoryItem: { alignItems: "center" },
  categoryCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  categoryImage: { width: 50, height: 50 },
  categoryText: { marginTop: 8, fontSize: 14, color: "#333", fontWeight: "600" },
  slider: { marginBottom: 20 },
  dealImage: {
    width: 300,
    height: 150,
    borderRadius: 12,
    resizeMode: "cover",
    marginHorizontal: 8,
  },
  popularSlider: { marginBottom: 20 },
  popularItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  popularCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  popularImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  popularName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});

export default HomeScreen;
