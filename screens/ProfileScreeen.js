import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.profileContent}>
        
        <Image
          source={{
            uri: "https://cdn2.f-cdn.com/contestentries/1440473/30778261/5bdd02db9ff4c_thumb900.jpg", 
          }}
          style={styles.profileIcon}
        />

        {/* Profile Details Section */}
        <View style={styles.detailsContainer}>
          {/* Name Field */}
          <View style={styles.field}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>John Doe</Text>
          </View>

          {/* Address Field */}
          <View style={styles.field}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>123 Main Street, City, Country</Text>
          </View>

          {/* Phone Number Field */}
          <View style={styles.field}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>+1234567890</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: '#34A853',
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileIcon: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the image circular
    marginBottom: 20,
  },
  detailsContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  field: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    width: 80, // Fixed width for alignment
  },
  value: {
    fontSize: 16,
    color: "#555",
    flex: 1, // Fills remaining space
    textAlign: "left",
  },
  footer: {
    backgroundColor: '#34A853',
    padding: 15,
    alignItems: "center",
  },
  
});

export default ProfileScreen;