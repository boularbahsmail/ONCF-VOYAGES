import { Pressable, Text, View, TouchableOpacity } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

const Persons = () => {
  const [adultsLength, setAdultsLength] = useState(1);
  const [childrenLength, setChildrenLength] = useState(1);

  const increaseAdults = () => {
    setAdultsLength(adultsLength + 1);
  };
  const decraseAdults = () => {
    if (adultsLength > 1) setAdultsLength(adultsLength - 1);
  };

  const increaseChildren = () => {
    setChildrenLength(childrenLength + 1);
  };

  const decraseChildren = () => {
    if (childrenLength > 1) setChildrenLength(childrenLength - 1);
  };

  return (
    <View style={styles.personsActions}>
      <View style={styles.personsAction}>
        <Text style={styles.actionTitle}>Adult(s) {">"} 15 ans</Text>
        <View style={styles.actionContent}>
          <TouchableOpacity
            style={styles.decrase}
            onPress={() => {
              decraseAdults();
            }}
            activeOpacity={0.5}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="minus"
              size={15}
              color="#2f0482"
            />
          </TouchableOpacity>
          <Text style={styles.personsLength}>{adultsLength}</Text>
          <TouchableOpacity
            style={styles.increase}
            onPress={() => {
              increaseAdults();
            }}
            
            activeOpacity={0.5}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="plus"
              size={15}
              color="#2f0482"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.personsAction}>
        <Text style={styles.actionTitle}>Child(ren) {"<"} 15 ans</Text>
        <View style={styles.actionContent}>
          <TouchableOpacity
            style={styles.decrase}
            onPress={() => {
              decraseChildren();
            }}
            activeOpacity={0.5}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="minus"
              size={15}
              color="#2f0482"
            />
          </TouchableOpacity>
          <Text style={styles.personsLength}>{childrenLength}</Text>
          <TouchableOpacity
            style={styles.increase}
            onPress={() => {
              increaseChildren();
            }}
            activeOpacity={0.5}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="plus"
              size={15}
              color="#2f0482"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Persons;
