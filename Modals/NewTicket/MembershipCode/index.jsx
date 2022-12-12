import { View, Text, TextInput } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

const MembershipCode = () => {
  return (
    <View style={styles.action}>
      <Text style={styles.actionTitle}>My membership code</Text>
      <TextInput
        style={styles.searchInput}
        autoCorrect={false}
        autoComplete="off"
        placeholder="Ex:12345"
        placeholderTextColor="gray"
        defaultValue=""
        keyboardType="number-pad"
      />
    </View>
  );
};

export default MembershipCode;
