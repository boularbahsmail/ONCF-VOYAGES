import { View, Modal, Text, Pressable, Image, TextInput } from "react-native";
import styles from "../../styles/ProfileModal.module.css";

import user_avatar from "../../assets/images/user_avatar.jpg";
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
              <MaterialIcon
                name="close"
                size={26}
                color="#FFFFFF"
              ></MaterialIcon>
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
              <MaterialIcon
                name="camera-alt"
                size={26}
                color="#2f0482"
              ></MaterialIcon>
            </Pressable>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <View style={styles.inputField}>
                <Text style={styles.label}>First name</Text>
                <TextInput
                  style={styles.input}
                  autoCorrect={false}
                  autoComplete="off"
                  placeholder="John"
                  placeholderTextColor="lightgray"
                  defaultValue="Ismail"
                />
              </View>
              <View style={styles.inputField}>
                <Text style={styles.label}>Last name</Text>
                <TextInput
                  style={styles.input}
                  autoCorrect={false}
                  autoComplete="off"
                  placeholder="Doe"
                  placeholderTextColor="lightgray"
                  defaultValue="Boularbah"
                />
              </View>
            </View>

            <View style={styles.emailInputField}>
              <Text style={styles.label}>My email</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                autoComplete="off"
                placeholder="JohnDoe@gmail.com"
                placeholderTextColor="lightgray" 
                defaultValue="boularbahismail01@gmail.com"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default index;
