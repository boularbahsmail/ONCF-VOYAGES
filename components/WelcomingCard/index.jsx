import { View, Text, Pressable } from "react-native";
import styles from "../../styles/WelcomingCard.module.css";

const WelcomingCard = ({ setNewTicketVisible }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.sayingHi}>Good Evening</Text>
        <Text style={styles.userFullName}>Ismail Boularbah</Text>
      </View>
      <View style={styles.booking}>
        <Pressable
          style={styles.bookingButton}
          onPress={() => {
            setNewTicketVisible(true);
          }}
        >
          <Text style={styles.bookingButtonText}>Book a ticket</Text>
        </Pressable>
        <Pressable style={styles.viewTicketsButton}>
          <Text style={styles.viewTicketsButtonText}>View my tickets</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomingCard;
