import { Pressable, Text, View } from "react-native";
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
          <Pressable
            style={styles.decrase}
            onPress={() => {
              decraseAdults();
            }}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="minus"
              size={15}
              color="#2f0482"
            />
          </Pressable>
          <Text style={styles.personsLength}>{adultsLength}</Text>
          <Pressable
            style={styles.increase}
            onPress={() => {
              increaseAdults();
            }}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="plus"
              size={15}
              color="#2f0482"
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.personsAction}>
        <Text style={styles.actionTitle}>Child(ren) {"<"} 15 ans</Text>
        <View style={styles.actionContent}>
          <Pressable
            style={styles.decrase}
            onPress={() => {
              decraseChildren();
            }}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="minus"
              size={15}
              color="#2f0482"
            />
          </Pressable>
          <Text style={styles.personsLength}>{childrenLength}</Text>
          <Pressable
            style={styles.increase}
            onPress={() => {
              increaseChildren();
            }}
          >
            <AntDesignIcon
              style={styles.customButtonIcon}
              name="plus"
              size={15}
              color="#2f0482"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Persons;
