import { StyleSheet, View, Text } from "react-native";

const WelcomingCard = () => {
  return (
    <View style={styles.card}>
        <View>
            <Text style={styles.sayingHi}>Good Evening</Text>
            <Text style={styles.userFullName}>Ismail Boularbah</Text>
        </View>
    </View>
  );
};

export default WelcomingCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#12ea9",
        borderRadius: 10,
        paddingVertical: 5,
        marginVertical: 10,
    },
    sayingHi: {
        color: "#2f0583",
        textAlign: "center",
        // backgroundColor: "#39e6b6",
        marginVertical: 5
    },
    userFullName: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: "#2f0583"
    }
});