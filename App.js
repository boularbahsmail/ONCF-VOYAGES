import { useState } from "react";
import { StatusBar, View } from "react-native";
import styles from "./App.module.css";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";
import SearchHistory from "./components/SearchHistory";

// Profile Modal
import Profile from "./Modals/Profile";
import NewTicket from "./Modals/NewTicket";
import MyTickets from "./Modals/MyTickets";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTicketVisible, setNewTicketVisible] = useState(false);
  const [myTicketsVisible, setMyTicketsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <Profile
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <NewTicket
          newTicketVisible={newTicketVisible}
          setNewTicketVisible={setNewTicketVisible}
        />
        <MyTickets
          myTicketsVisible={myTicketsVisible}
          setMyTicketsVisible={setMyTicketsVisible}
          setNewTicketVisible={setNewTicketVisible}
        />
      </View>
      <Header setModalVisible={setModalVisible} />
      <WelcomingCard
        setNewTicketVisible={setNewTicketVisible}
        setMyTicketsVisible={setMyTicketsVisible}
      />
      <SearchHistory />
    </View>
  );
}
