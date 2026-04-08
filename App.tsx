import { useState } from 'react';
import { Button, ScrollView, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Alert, TouchableNativeFeedback, Keyboard } from 'react-native';
import FlexBox from './components/flex.box';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    NotoSans: require('./assets/fonts/NotoSansMeroitic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
        <HomeScreen />
        <DetailScreen />
        <AboutScreen />
    </View>
  );
}

const styles = StyleSheet.create({

});
