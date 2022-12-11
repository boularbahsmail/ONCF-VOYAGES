import { Pressable, Text, View } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

const Date = () => {
  return (
    <View style={styles.action}>
      <Text style={styles.actionTitle}>My departure date</Text>
      <View style={styles.dateTime}>
        <Pressable style={styles.dateContainer}>
          <SimpleLineIcon
            style={styles.dropdownLeftIcon}
            name="calendar"
            size={20}
            color="#2f0482"
          />
          <Text style={styles.dateContainerText}>10-12-2022</Text>
        </Pressable>
        <Pressable style={styles.timeContainer}>
          <SimpleLineIcon
            style={styles.dropdownLeftIcon}
            name="clock"
            size={20}
            color="#2f0482"
          />
          <Text style={styles.timeContainerText}>Morning</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Date;
