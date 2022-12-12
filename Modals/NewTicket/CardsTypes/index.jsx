import { View, Text, RefreshControl } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

import { Dropdown } from "react-native-element-dropdown";

import CardsTypesData from "./data";

const EmptyComponent = () => {
  return (
    <View style={styles.emptyComponent}>
      <Text>List is empty</Text>
    </View>
  );
};

const refreshing = () => {};

const CardsTypes = () => {
  return (
    <View style={styles.action}>
      <Text style={styles.actionTitle}>My card</Text>
      <Dropdown
        style={styles.stationsList}
        containerStyle={styles.container}
        itemTextStyle={styles.textStyle}
        activeColor="white"
        iconColor="#2f0482"
        data={CardsTypesData}
        labelField="name"
        valueField="No"
        maxHeight={155}
        // search={true}
        // searchPlaceholder={"Search station..."}
        // renderInputSearch={searchInput}
        onChange={() => {}}
        flatListProps={{
          ListEmptyComponent: <EmptyComponent />,
          refreshControl: (
            <RefreshControl refreshing={false} onRefresh={refreshing} />
          ),
        }}
      />
    </View>
  );
};

export default CardsTypes;
