import { useState } from 'react';
import { Button, ScrollView, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface ITodo {
  id: number,
  name: string
}
export default function App() {

  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo) return;
    setListTodo([...listTodo, 
      { id: randomInteger(2, 20000), name: todo }
    ])
  }

  return (
    
    <View style={styles.container}> 
      {/* header */}
      <Text style={styles.header}>Todo App</Text>

      {/* form */}
      <View style={styles.body}>
        <TextInput style={styles.todoInput} 
        onChangeText={(value) => setTodo(value)}
        />
        <Button title='Add todo' 
        onPress={handleAddTodo}
        />
      </View>

      {/* list form */}
      <View style={styles.body}>
        <FlatList 
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={({item}) => {
            return (
              <Text style = {styles.todoItem}>{item.name}</Text>
            )
          }}
        />
        {/* <Text>{JSON.stringify(listTodo)}</Text> */}
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

  todoItem: {
    fontSize: 30,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20
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
    paddingHorizontal: 10,
    marginBottom: 20
  }

});
