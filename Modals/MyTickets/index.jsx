import { Text, TouchableOpacity, View, Modal } from "react-native";
import ModalHeader from "../../components/ModalHeader";
import styles from "../../styles/MyTickets.module.css";

const index = ({
  myTicketsVisible,
  setMyTicketsVisible,
  setNewTicketVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={myTicketsVisible}
      onRequestClose={() => {
        setMyTicketsVisible(!myTicketsVisible);
      }}
    >
      <View style={styles.myTicketsContainer}>
        <ModalHeader
          myTicketsVisible={myTicketsVisible}
          setMyTicketsVisible={setMyTicketsVisible}
          headerTitle={"My tickets"}
          modalClosed={myTicketsVisible}
          setModalClosed={setMyTicketsVisible}
        />
        <View style={styles.myTickets}>
          <Text style={styles.myTicketsText}>
            You don{"'"}t have tickets at the moment
          </Text>
          <TouchableOpacity
            style={styles.myTicketsButton}
            activeOpacity={0.8}
            onPress={() => {
              setMyTicketsVisible(false);
              setNewTicketVisible(true);
            }}
          >
            <Text style={styles.myTicketsButtonText}>Buy ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default index;
