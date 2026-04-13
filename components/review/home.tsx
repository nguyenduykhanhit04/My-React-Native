import { Button, Text, View } from "react-native"
import { NOTOSANS } from "../../utils/const";

const HomeScreen = (props: any) => {
    const { navigation } = props;

    return (
        <View>
            <Text style={{ fontFamily: NOTOSANS, fontSize: 20 }}>Home Screen</Text>
            <Button title="View Detail" 
                onPress={() => navigation.navigate("Detail")}
            />
        </View>
    )
}

export default HomeScreen;