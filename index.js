/**
 * @format
 */

// Import Firebase
import { initializeApp } from '@react-native-firebase/app';
import { AppRegistry, View, Text } from 'react-native'; // Import View and Text here
import AuthScreen from './src/screens/Authscreen'; // Corrected the file name to match the import statement
import { name as appName } from './app.json';
import React, { useState, useEffect } from 'react'; // Import React and hooks

// Firebase configuration
const firebaseConfig = {
 // Your Firebase Config
 apiKey: "AIzaSyDXXhlLISkLxdjlWKe9UbtimRMzqkSB1Bw",
 authDomain: "digitallifestream.com",
 projectId: "salonreactnative",
 storageBucket: "salonreactnative.appspot.com",
 messagingSenderId: "992560881942",
 appId: "1:992560881942:ios:da5d0b5ef0fdf3dd933037",
 databaseURL: "https://salonreactnative.firebaseio.com" // Add this line

};

// Initialize Firebase
initializeApp(firebaseConfig).catch((error) => {
 console.error('Firebase initialization error:', error);
});

// Define App component to render AuthScreen
const App = () => {
 const [firebaseInitialized, setFirebaseInitialized] = useState(false);

 useEffect(() => {
    // Assuming you want to perform some action after Firebase is initialized
    // For example, you might want to check if a user is already signed in
    // This is just an example, adjust according to your needs
    setFirebaseInitialized(true);
 }, []);

 if (!firebaseInitialized) {
    return <View><Text>Loading...</Text></View>; // Or any loading indicator
 }

 return <AuthScreen />;
};

// Register App component
AppRegistry.registerComponent(appName, () => App);
