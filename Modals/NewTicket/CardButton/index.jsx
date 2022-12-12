import { Pressable, View, Text } from "react-native";
import styles from "../../../styles/NewTicket.module.css";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CardButton = ({ cardSelected, setCardSelected }) => {
  return (
    <Pressable
      style={cardSelected == true ? styles.active : styles.inActive}
      onPress={() => {
        setCardSelected(true);
      }}
    >
      <View style={styles.cardtIcon}>
        <MaterialCommunityIcons
          name="card-bulleted-outline"
          size={20}
          color={cardSelected == false ? "white" : "#2f0482"}
        />
      </View>
      <Text
        style={cardSelected == true ? styles.activeText : styles.inActiveText}
      >
        Reserve with my card
      </Text>
    </Pressable>
  );
};

export default CardButton;
