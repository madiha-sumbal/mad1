import React, { useState } from 'react';  
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../backend/firebaseAuth';

const SignupScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        if (!email || !password || !firstName || !lastName) {
            setError("All fields are required.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Account created successfully!");
                navigation.navigate('LoginScreen');
            })
            .catch((err) => setError(err.message));
    };

    return (
        <View style={styles.container}>
            {/* Circular Image container */}
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/profile.png')} 
                    style={styles.image} 
                />
            </View>

            {/* First Name */}
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
            />

            {/* Last Name */}
            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
            />

            {/* Email */}
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password */}
            <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Navigation to Login */}
            <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.link}>
                Already have an account? <Text style={styles.loginText}>Login</Text>
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden',
        marginTop: 40, // Adjusted from -20 to 40 to bring it down
        marginBottom: 50,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#34A853' // Green border for the circular image
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#34A853',
        width: '90%',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        color: '#555',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    loginText: {
        color: '#34A853',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default SignupScreen;
