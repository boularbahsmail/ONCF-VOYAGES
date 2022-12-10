import { View, Modal, Text, Pressable, Image } from "react-native";
import styles from "../../styles/ProfileModal.module.css";

import user_avatar from "../../assets/images/user_avatar.jpg";
import closeIcon from "../../assets/icons/close-outline.png";
import changeAvatar from "../../assets/icons/camera-outline.png";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const index = ({ modalVisible, setModalVisible }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalHeader}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <MaterialIcon name="close" size={26} color="#FFFFFF"></MaterialIcon>
            </Pressable>
            <Text style={styles.headerText}>Profile</Text>
          </View>

          <View style={styles.userAvatar}>
            <Image
              style={styles.userAvatarImage}
              source={user_avatar}
              alt="User Avatar"
            />
            <Pressable style={styles.changeAvatarButton}>
              <MaterialIcon name="camera-alt" size={26} color="#2f0482"></MaterialIcon>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default index;
