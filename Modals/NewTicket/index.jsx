import { useState } from "react";
import { View, Modal } from "react-native";
import ModalHeader from "../../components/ModalHeader";
import styles from "../../styles/NewTicket.module.css";

import TicketButton from "./TicketButton";
import CardButton from "./CardButton";

import Departure from "./Departure";
import Arrival from "./Arrival";
import Date from "./Date";
import Comfort from "./Comfort";
import Persons from "./Persons";
import SearchButton from "./SearchButton";

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

          <View style={styles.bookingForm}>
            {cardSelected == false ? (
              <View>
                <Departure />
                <Arrival />
                <Date />
                <Comfort />
                <Persons />
                <SearchButton />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewTicket;
