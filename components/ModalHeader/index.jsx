import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/ProfileModal.module.css";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const ModalHeader = ({ modalClosed, setModalClosed, headerTitle }) => {
  return (
    <View style={styles.modalHeader}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalClosed(!modalClosed)}
        activeOpacity={0.5}
      >
        <MaterialIcon name="close" size={26} color="#FFFFFF"></MaterialIcon>
      </TouchableOpacity>
      <Text style={styles.headerText}>{headerTitle}</Text>
    </View>
  );
};

export default ModalHeader;
