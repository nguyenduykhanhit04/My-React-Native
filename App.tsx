import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // jsx: javascript xml
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Hello World 1</Text> 
      <Text style={{ color: "pink", fontSize: 40, fontWeight: 'bold'}}>Hello World 2</Text> 
      
      <View style={styles.box}>
        <Text>Hello World 3</Text>
      </View>
    
      <View>
        <Text style={styles.parentText}>Hello World 4
          <Text>Hello World 4.1</Text>
          <Text style={styles.childText}>Hello World 5</Text>
        </Text>
        
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
