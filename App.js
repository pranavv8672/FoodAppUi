import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'; 

import { 
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import {useFonts } from 'expo-font';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './components/Home';
Icon.loadFont();

const Stack = createNativeStackNavigator();

export default function App() {

  let[fontsLoaded, error] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options = {{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
