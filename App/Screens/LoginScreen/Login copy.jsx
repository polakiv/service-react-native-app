// Login.js
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';

import { useOAuth } from "@clerk/clerk-expo";
import useAuthenticatedRequest from '../../hooks/useAuthenticatedRequest'; // Adjust the path

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const authenticatedFetch = useAuthenticatedRequest();

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, [authenticatedFetch]); // Make sure to include authenticatedFetch in the dependencies array

  return (
    <View style={{ alignItems: 'center' }}>
       <Image source={require('./../../../assets/login.png')}
                style={styles.loginImage}
            />
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: 'white', textAlign: 'center' }}>
                    Давай найдем <Text style={{ fontWeight: 'bold' }} >`Профессиональную уборку и ремонт</Text> Service
                </Text>
                <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', marginTop: 20 }}>
                    Лучшее приложение для сервиса
                </Text>
    </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>Старт</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: "BLACK"
    },
    subContainer: {
        width: '100%',
        color: 'white',
        backgroundColor: '#8E3FFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: '70%',
        marginTop: -20,
        padding: 20
    },
    button: {
        borderRadius: 15,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        color: '#8E3FFF'
    }
})