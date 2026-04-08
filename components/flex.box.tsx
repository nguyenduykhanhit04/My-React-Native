import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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