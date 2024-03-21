import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log("test 2")


  const handleSignUp = async () => {
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered!', response);
      // You can navigate to another screen upon successful sign up
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in!', response);
      // You can navigate to another screen upon successful sign in
      console.log("Logged in")
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default AuthScreen;