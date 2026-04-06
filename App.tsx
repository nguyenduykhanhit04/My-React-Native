import { useState } from 'react';
import { Button, ScrollView, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([])

  return (
    
    <View style={styles.container}> 
      {/* header */}
      <Text style={styles.header}>Todo App</Text>

      {/* form */}
      <View>
        <TextInput style={styles.todoInput} 
        onChangeText={(value) => setTodo(value)}
        />
        <Button title='Add todo' 
        onPress={() => alert("me")}
        />
      </View>

      {/* list form */}
      <View style={styles.body}>
        <Text>list todo: {todo}</Text>
        <Text>{JSON.stringify(listTodo)}</Text>
      </View>
    </View> 
    

  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40
  },

  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',

  },

  todoInput: {
    borderBottomWidth: 1,
    borderBlockColor: "green",
    padding: 5,
    margin: 15
  },

  body: {
    paddingHorizontal: 10
  }

});
