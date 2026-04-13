import { Button, Text, View } from "react-native"
import { NOTOSANS } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const DetailScreen = () => {
    
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={{ fontFamily: NOTOSANS, fontSize: 20 }}>Detail Screen</Text>
            <Button title="Go home" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}

export default DetailScreen;