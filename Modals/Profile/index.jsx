import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
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
            <TouchableOpacity
              style={styles.changeAvatarButton}
              activeOpacity={0.8}
            >
              <MaterialIcon
                name="camera-alt"
                size={26}
                color="#2f0482"
              ></MaterialIcon>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.modifyButton} activeOpacity={0.8}>
              <Text style={styles.modifyButtonText}>Modify my profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.disconnectButton}
              activeOpacity={0.8}
            >
              <Text style={styles.disconnectButtonText}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
