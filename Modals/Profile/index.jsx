import { View, Modal, Text, Pressable, Image, TextInput } from "react-native";
import styles from "../../styles/ProfileModal.module.css";

import user_avatar from "../../assets/images/user_avatar.jpg";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import ModalHeader from "../../components/ModalHeader";
import { Button } from "react-native-paper";

const Profile = ({ modalVisible, setModalVisible }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ModalHeader
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            headerTitle="Profile"
            
            modalClosed={modalVisible}
            setModalClosed={setModalVisible}
          />

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

          <View style={styles.bottomButtons}>
            <Button style={styles.modifyButton}>
              <Text style={styles.modifyButtonText}>Modify my profile</Text>
            </Button>

            <Button style={styles.disconnectButton}>
              <Text style={styles.disconnectButtonText}>Disconnect</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
