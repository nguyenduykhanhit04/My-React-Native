import { Button, Text, View } from "react-native"


const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="View Detail" 
                onPress={() => alert("mew")}
            />
        </View>
    )
}

export default HomeScreen;