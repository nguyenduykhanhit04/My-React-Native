import { useState } from 'react';
import { Button, ScrollView, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Alert, TouchableNativeFeedback, Keyboard } from 'react-native';
import FlexBox from './components/flex.box';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { useFonts } from 'expo-font';
import { NOTOSANS } from './utils/const';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    [NOTOSANS]: require('./assets/fonts/NotoSansMeroitic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Trang chủ'}}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{title: 'Chi tiết'}}/>
        <Stack.Screen name="About" component={AboutScreen} options={{title: 'Về chúng tôi'}}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
