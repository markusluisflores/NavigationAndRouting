import { StyleSheet, Text, View } from "react-native";

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTxt}>
                CPRG-303 Lab 5
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
    },

    headerTxt: {
        fontSize: 20,
        fontWeight: "600",
    }
});

export default Header;