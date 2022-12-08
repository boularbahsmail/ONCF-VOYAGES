import { StyleSheet, Image, View, Pressable, Text } from "react-native";

import user_avatar from "../../assets/user_avatar.jpg";
import app_logo from "../../assets/al-boraq-logo.png"

const Header = () => {
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
        <Image style={styles.appLogo} source={app_logo} alt="App-Logo" />
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text style={styles.text}>EN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  appLogo: {
    height: 50,
    width: 100,
  },
  button: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#39e6b6",
  },
});
