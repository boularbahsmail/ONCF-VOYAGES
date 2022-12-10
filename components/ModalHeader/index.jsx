import { View, Text, Pressable } from "react-native";
import styles from "../../styles/ProfileModal.module.css";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const ModalHeader = ({ modalVisible, setModalVisible, headerTitle }) => {
  return (
    <View style={styles.modalHeader}>
      <Pressable
        style={styles.closeButton}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <MaterialIcon name="close" size={26} color="#FFFFFF"></MaterialIcon>
      </Pressable>
      <Text style={styles.headerText}>{headerTitle}</Text>
    </View>
  );
};

export default ModalHeader;
