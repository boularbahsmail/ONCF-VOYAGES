import { View, Text, RefreshControl } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

import { Dropdown } from "react-native-element-dropdown";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

import Stations from "../Stations";

const EmptyComponent = () => {
  return (
    <View style={styles.emptyComponent}>
      <Text>List is empty</Text>
    </View>
  );
};

const searchInput = () => {
  return (
    <TextInput
      style={styles.searchInput}
      autoCorrect={false}
      autoComplete="off"
      placeholder="Search by station name.."
      placeholderTextColor="lightgray"
      defaultValue=""
    />
  );
};

const locationIcon = () => {
  return <SimpleLineIcon style={styles.dropdownLeftIcon} name="location-pin" size={15} color="#2f0482" />;
};

const refreshing = () => {};

const Departure = () => {
  return (
    <View style={styles.action}>
      <Text style={styles.actionTitle}>My departure station</Text>
      <Dropdown
        style={styles.stationsList}
        containerStyle={styles.container}
        itemTextStyle={styles.textStyle}
        activeColor="white"
        iconColor="#2f0482"
        data={Stations}
        labelField="name"
        valueField="No"
        maxHeight={155}
        // search={true}
        // searchPlaceholder={"Search station..."}
        // renderInputSearch={searchInput}
        renderLeftIcon={locationIcon}
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

export default Departure;
