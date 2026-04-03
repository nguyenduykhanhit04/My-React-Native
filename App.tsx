import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [count, setCount ] = useState<number>(0);
  const [name, setName ] = useState<string>("");
  const [age, setAge ] = useState<number>(0);
  // jsx: javascript xml
  return (
    <View style={styles.container}> 

      <Text>Name: {name} </Text>
      <TextInput 
        multiline
        autoCapitalize={'characters'}
        onChangeText={(value) => setName(value)} 
        style={{
          borderColor: "green",
          borderWidth: 1,
          width: 200,
          padding: 15
        }} 
      />

      <Text>Age: {age} </Text>
      <TextInput 
        multiline
        onChangeText={(value) => setAge(value)} 
        style={{
          borderColor: "red",
          borderWidth: 1,
          width: 200,
          padding: 15
        }} 
        keyboardType='numeric'
      />
      
      <Text style={{ fontSize: 40, fontWeight: "600" }}>count = {count}</Text>
      <View>
          <Button color={"green"} title='Increase' onPress={() => setCount(count + 1)} />
      </View>
      
    </View> 
  );
}

// Không có khái niệm CSS trong React Native, chỉ có StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  parentText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  childText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
