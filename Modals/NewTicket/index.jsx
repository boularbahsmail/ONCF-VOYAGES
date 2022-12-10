import { useState } from "react";
import { View, Modal } from "react-native";
import ModalHeader from "../../components/ModalHeader";
import styles from "../../styles/NewTicket.module.css";

import TicketButton from "./TicketButton";
import CardButton from "./CardButton";

const NewTicket = ({ newTicketVisible, setNewTicketVisible }) => {
  const [cardSelected, setCardSelected] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={newTicketVisible}
      onRequestClose={() => {
        setNewTicketVisible(!newTicketVisible);
      }}
    >
      <View style={styles.centeredView}>
        <ModalHeader
          newTicketVisible={newTicketVisible}
          setNewTicketVisible={setNewTicketVisible}
          headerTitle="Book a ticket"
          modalClosed={newTicketVisible}
          setModalClosed={setNewTicketVisible}
        />

        <View style={styles.ticketsWrapper}>
          <View style={styles.buyTypesButtons}>
            <TicketButton
              cardSelected={cardSelected}
              setCardSelected={setCardSelected}
            />
            <CardButton
              cardSelected={cardSelected}
              setCardSelected={setCardSelected}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewTicket;
