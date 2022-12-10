import { StyleSheet, Image, View, Pressable, Text, Modal } from "react-native";
import styles from "../../styles/Header.module.css";

import user_avatar from "../../assets/images/user_avatar.jpg";
import app_logo from "../../assets/images/al-boraq-logo.png";

const Header = ({ setModalVisible }) => {
  return (
    <View style={styles.header}>
      <View>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Image
            style={styles.userAvatar}
            source={user_avatar}
            alt="User-Avatar"
          />
        </Pressable>
      </View>
      <View>
        <Image style={specialStyle.appLogo} source={app_logo} alt="App-Logo" />
      </View>
      <View>
        <Pressable style={styles.switchLanguageButton}>
          <Text style={styles.switchLanguageButtonText}>EN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const specialStyle = StyleSheet.create({
  appLogo: {
    height: 50,
    width: 95,
    tintColor: "white",
  },
});
