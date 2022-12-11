import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../../../styles/NewTicket.module.css";

const Comfort = () => {
  const [buttonActive, setButtonActive] = useState("2nd");

  return (
    <View style={styles.action}>
      <Text style={styles.actionTitle}>My comfort</Text>
      <View style={styles.comfort}>
        <Pressable
          onPress={() => {
            setButtonActive("1st");
          }}
          style={
            buttonActive == "1st" ? styles.activeButton : styles.comfortButton
          }
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
        </Pressable>
        <Pressable
          onPress={() => {
            setButtonActive("2nd");
          }}
          style={
            buttonActive == "2nd" ? styles.activeButton : styles.comfortButton
          }
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
        </Pressable>
        <Pressable
          onPress={() => {
            setButtonActive("singleBed");
          }}
          style={
            buttonActive == "singleBed"
              ? styles.activeButton
              : styles.comfortButton
          }
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
        </Pressable>
      </View>
    </View>
  );
};

export default Comfort;
