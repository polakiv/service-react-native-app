 
import { LogBox, StyleSheet, Text, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import Tabnavigation from './App/Navigations/Tabnavigation';
import { useFonts } from 'expo-font'; 

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {

  const [fontsLoaded] = useFonts({
    'Raleway': require('./assets/Raleway/Raleway-VariableFont_wght.ttf')
  })
  return (<View style={styles.container}> 
        <NavigationContainer >
          <Tabnavigation />
        </NavigationContainer> 
  </View>
  );
}
//LogBox.ignoreAllLogs()
const styles = StyleSheet.create({
  container: {
    maxWidth: 415,
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    fontWeight: 100,
    fontFamily: 'Raleway'
  },
});
