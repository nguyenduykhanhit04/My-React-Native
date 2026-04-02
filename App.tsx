import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount ] = useState<number>(0);
  const [name, setName] = useState<string>("nguyenduykhanhit04");
  const [text, setText] = useState({
    name:"nguyenduykhanhit04",
    age:22,
  });
  // jsx: javascript xml
  return (
    <View style={styles.container}> 
      <Text>Hello {name}</Text> 
      
      <Text>Hello {text.name}</Text>
      <Text>Hello {text.age}</Text>

      <View>
          <Button color={"red"} title='Increase' onPress={() => setCount(count + 1)} />
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
