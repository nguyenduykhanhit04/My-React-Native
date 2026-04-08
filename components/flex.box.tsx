import { View, Text, StyleSheet } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        flex: 1
    },

    item1: {
        backgroundColor: "violet",
        padding: 36
    },

    item2: {
        backgroundColor: "red",
        padding: 36
    },

    item3: {
        backgroundColor: "yellow",
        padding: 36
    },

    item4: {
        backgroundColor: "green",
        padding: 36
    }
})

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="aliwangwang" size={24} color="black" />
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>
            
            <View style={styles.item2}>
                <Text>Item 2</Text>
            </View>
            
            <View style={styles.item3}>
                <Text>Item 3</Text>
            </View>
            
            <View style={styles.item4}>
                <Text>Item 4</Text>
            </View>

        </View>
    )
}

export default FlexBox;