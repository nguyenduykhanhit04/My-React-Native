import { useState } from 'react';
import { Button, ScrollView, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [students, setStudents] = useState([
    {id: 1, name: "Khanh", age: 18},
    {id: 2, name: "Khanh2", age: 19},
    {id: 3, name: "Khanh3", age: 13},
    {id: 4, name: "Khanh4", age: 14},
    {id: 5, name: "Khanh5", age: 15},
    {id: 6, name: "Khanh", age: 18},
    {id: 7, name: "Khanh2", age: 19},
    {id: 8, name: "Khanh3", age: 13},
    {id: 9, name: "Khanh4", age: 14},
    {id: 10, name: "Khanh5", age: 15},
    {id: 11, name: "Khanh", age: 18},
    {id: 12, name: "Khanh2", age: 19},
    {id: 13, name: "Khanh3", age: 13},
    {id: 14, name: "Khanh4", age: 14},
    {id: 15, name: "Khanh5", age: 15},
  ])

  return (
    <View style={styles.container}> 
      <Text style={{ fontSize: 50 }}>Hello world</Text>
      
      <FlatList 
      data={students}
      numColumns={2}
      keyExtractor={item => item.id + ""}
      renderItem={({item}) => {
        return (
          <View style={{
            padding: 30,
            backgroundColor: "pink",
            marginBottom: 30,
            marginHorizontal: 30,
            width: 110,
            height: 80
          }}>
            <Text>{item.name}</Text>
          </View>
        )
      }}      
      />

      
      
      
      {/* <ScrollView>
        { students.map(item => {
          return (
            <View key={item.id} style={{
              padding: 30,
              backgroundColor: "pink",
              marginBottom: 30
            }}> 
                <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}

      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
