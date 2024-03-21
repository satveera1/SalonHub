import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthListener = () => {
  const [user, setUser] = useState(null);
  console.log("test1")

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return unsubscribe; // Cleanup the listener on unmount
  }, []);

  return (
    <View>
      {user ? (
        <Text>User is signed in: {user.email}</Text>
      ) : (
        <Text>User is not signed in</Text>
      )}
    </View>
  );
};

export default AuthListener;