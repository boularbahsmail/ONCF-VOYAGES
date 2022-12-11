import { Pressable, Text, View } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

const SearchButton = () => (
  <View style={styles.searchButton}>
    <Pressable style={styles.searchTicketButton}>
      <Text style={styles.searchTicketButtonText}>Search</Text>
    </Pressable>
  </View>
);

export default SearchButton;
