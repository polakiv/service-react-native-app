// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GoogleSignInComponent from './../../Utils/GoogleAuth';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GoogleSignInComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
