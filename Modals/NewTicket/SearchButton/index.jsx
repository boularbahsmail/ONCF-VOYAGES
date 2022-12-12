import { TouchableOpacity, Text, View } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

const SearchButton = () => (
  <View style={styles.searchButton}>
    <TouchableOpacity style={styles.searchTicketButton} activeOpacity={0.8}>
      <Text style={styles.searchTicketButtonText}>Search</Text>
    </TouchableOpacity>
  </View>
);

export default SearchButton;
