import { View, Text } from "react-native";
import styles from "../../../styles/SingleSearch.module.css";

const SingleSearch = ({
  departure,
  passengersLength,
  passengerClass,
  arrival,
}) => {
  return (
    <View style={styles.singleSearch}>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Text style={styles.actionTitle}>Departure</Text>
          <Text style={styles.actionContent}>{departure}</Text>
        </View>

        <View style={styles.passengers}>
          <Text style={styles.passengersLength}>
            {passengersLength > 1
              ? `${passengersLength} passengers`
              : passengersLength == 1
              ? `${passengersLength} passenger`
              : null}
          </Text>
          <View style={styles.hrLine}>
            <View style={styles.dot}></View>
            <View style={styles.line}></View>
            <View style={styles.dot}></View>
          </View>
          <Text style={styles.passangerClass}>{passengerClass} class</Text>
        </View>

        <View style={styles.action}>
          <Text style={styles.actionTitle}>Arrival</Text>
          <Text style={styles.actionContent}>{arrival}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleSearch;
