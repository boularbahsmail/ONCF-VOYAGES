import { StyleSheet, Image, View, Pressable, Text } from "react-native";
import styles from "../../styles/Header.module.css";

import user_avatar from "../../assets/images/user_avatar.jpg";
import app_logo from "../../assets/images/al-boraq-logo.png";

const Header = ({ language, setLanguage }) => {
  const switchLanguage = () => {
    if (language != "FR") setLanguage("FR");
    else setLanguage("EN");
  };

  return (
    <View style={styles.header}>
      <View>
        <Image
          style={styles.userAvatar}
          source={user_avatar}
          alt="User-Avatar"
        />
      </View>
      <View>
        <Image style={specialStyle.appLogo} source={app_logo} alt="App-Logo" />
      </View>
      <View>
        <Pressable
          style={styles.switchLanguageButton}
          onPress={() => {
            switchLanguage();
          }}
        >
          <Text style={styles.switchLanguageButtonText}>{language}</Text>
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
