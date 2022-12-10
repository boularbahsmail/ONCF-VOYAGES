import { Pressable, View, Text } from "react-native";
import styles from "../../../styles/NewTicket.module.css";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TicketButton = ({ cardSelected, setCardSelected }) => {
  return (
    <Pressable
      style={cardSelected == false ? styles.active : styles.inActive}
      onPress={() => {
        setCardSelected(false);
      }}
    >
      <View style={styles.ticketIcon}>
        <MaterialCommunityIcons
          name="ticket-outline"
          size={20}
          color={cardSelected == true ? "white" : "#2f0482"}
        />
      </View>
      <Text
        style={cardSelected == false ? styles.activeText : styles.inActiveText}
      >
        Buy my ticket
      </Text>
    </Pressable>
  );
};

export default TicketButton;
