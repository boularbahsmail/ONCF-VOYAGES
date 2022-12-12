import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

const Date = () => {
  return (
    <View style={styles.action}>
      <Text style={styles.actionTitle}>My departure date</Text>
      <View style={styles.dateTime}>
        <TouchableOpacity style={styles.dateContainer} activeOpacity={0.5}>
          <SimpleLineIcon
            style={styles.calendarIcon}
            name="calendar"
            size={20}
            color="#2f0482"
          />
          <Text style={styles.dateContainerText}>10-12-2022</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeContainer} activeOpacity={0.5}>
          <SimpleLineIcon
            style={styles.clockIcon}
            name="clock"
            size={20}
            color="#2f0482"
          />
          <Text style={styles.timeContainerText}>Morning</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Date;
