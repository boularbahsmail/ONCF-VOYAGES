import { View, Text, Pressable } from "react-native";
import styles from "../../styles/WelcomingCard.module.css";

const WelcomingCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.sayingHi}>Good Evening</Text>
        <Text style={styles.userFullName}>Ismail Boularbah</Text>
      </View>
      <View style={styles.booking}>
        <Pressable style={styles.bookingButton}>
          <Text style={styles.bookingButtonText}>I book a ticked</Text>
        </Pressable>
        <Pressable style={styles.viewTicketsButton}>
          <Text style={styles.viewTicketsButtonText}>View my tickets</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomingCard;
