import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

const Comfort = () => {
  const [buttonActive, setButtonActive] = useState("2nd");

  return (
    <View style={styles.action}>
      <Text style={styles.actionTitle}>My comfort</Text>
      <View style={styles.comfort}>
        <TouchableOpacity
          onPress={() => {
            setButtonActive("1st");
          }}
          style={
            buttonActive == "1st" ? styles.activeButton : styles.comfortButton
          }
          activeOpacity={0.8}
        >
          <Text
            style={
              buttonActive == "1st"
                ? styles.activeButtonText
                : styles.comfortButtonText
            }
          >
            1st class
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setButtonActive("2nd");
          }}
          style={
            buttonActive == "2nd" ? styles.activeButton : styles.comfortButton
          }
          activeOpacity={0.8}
        >
          <Text
            style={
              buttonActive == "2nd"
                ? styles.activeButtonText
                : styles.comfortButtonText
            }
          >
            2nd class
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setButtonActive("singleBed");
          }}
          style={
            buttonActive == "singleBed"
              ? styles.activeButton
              : styles.comfortButton
          }
          activeOpacity={0.8}
        >
          <Text
            style={
              buttonActive == "singleBed"
                ? styles.activeButtonText
                : styles.comfortButtonText
            }
          >
            Single bed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comfort;
