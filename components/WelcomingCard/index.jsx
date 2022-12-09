import { View, Text, Pressable } from "react-native";
import styles from "../../styles/WelcomingCard.module.css";

const WelcomingCard = ({ language }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.sayingHi}>
          {language == "EN" ? "Good Evening" : "Bonsoir"}
        </Text>
        <Text style={styles.userFullName}>Ismail Boularbah</Text>
      </View>
      <View style={styles.booking}>
        <Pressable style={styles.bookingButton}>
          <Text style={styles.bookingButtonText}>
            {language == "EN" ? "I book a ticked" : "Je réserve un billet"}
          </Text>
        </Pressable>
        <Pressable style={styles.viewTicketsButton}>
          <Text style={styles.viewTicketsButtonText}>View my tickets</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomingCard;
