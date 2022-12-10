import { View, Text, ScrollView } from "react-native";
import styles from "../../styles/SearchHistory.module.css";

import SingleSearch from "./SingleSearch";
import histories from "./data";

const SearchHistory = () => {
  return (
    <View style={styles.searchHistoryContainer}>
      <Text style={styles.title}>Search history</Text>
      <View style={styles.wrapper}>
        <ScrollView style={styles.wrapperScrollView}>
          {histories.map((history, index) => (
            <SingleSearch
              key={index}
              departure={history.departure}
              passengersLength={history.passengersLength}
              passengerClass={history.passengerClass}
              arrival={history.arrival}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchHistory;
