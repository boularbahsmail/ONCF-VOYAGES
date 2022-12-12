import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/WelcomingCard.module.css";

const WelcomingCard = ({ setNewTicketVisible }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.sayingHi}>Good Evening</Text>
        <Text style={styles.userFullName}>Ismail Boularbah</Text>
      </View>
      <View style={styles.booking}>
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => {
            setNewTicketVisible(true);
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.bookingButtonText}>Book a ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewTicketsButton} activeOpacity={0.8}>
          <Text style={styles.viewTicketsButtonText}>View my tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomingCard;
