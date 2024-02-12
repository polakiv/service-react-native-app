// GoogleSignIn.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

GoogleSignIn.initAsync();

const GoogleSignInComponent = () => {
  const [userInfo, setUserInfo] = useState(null);

  const signIn = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();

      if (type === 'success') {
        setUserInfo(user);
      } else {
        Alert.alert('Google Sign In failed');
      }
    } catch (error) {
      console.error('Error in Google Sign In', error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignIn.signOutAsync();
      setUserInfo(null);
    } catch (error) {
      console.error('Error in Google Sign Out', error);
    }
  };

  return (
    <View>
      {userInfo ? (
        <View>
          <Text>Welcome, {userInfo.displayName}!</Text>
          <TouchableOpacity onPress={signOut}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={signIn}>
          <Text>Sign In with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GoogleSignInComponent;
