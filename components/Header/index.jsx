import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Header.module.css";

import user_avatar from "../../assets/images/user_avatar.jpg";
import app_logo from "../../assets/images/al-boraq-logo.png";

const Header = ({ setModalVisible }) => {
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          activeOpacity={0.8}
        >
          <Image
            style={styles.userAvatar}
            source={user_avatar}
            alt="User-Avatar"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image style={specialStyle.appLogo} source={app_logo} alt="App-Logo" />
      </View>
      <View>
        <TouchableOpacity
          style={styles.switchLanguageButton}
          activeOpacity={0.8}
        >
          <Text style={styles.switchLanguageButtonText}>EN</Text>
        </TouchableOpacity>
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
