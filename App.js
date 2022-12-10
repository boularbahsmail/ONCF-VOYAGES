import { useState } from "react";
import { StatusBar, View } from "react-native";
import styles from "./App.module.css";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";
import SearchHistory from "./components/SearchHistory";

// Profile Modal
import Profile from "./Modals/Profile";
import NewTicket from "./Modals/NewTicket";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTicketVisible, setNewTicketVisible] = useState(false);

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
      </View>
      <Header setModalVisible={setModalVisible} />
      <WelcomingCard setNewTicketVisible={setNewTicketVisible} />
      <SearchHistory />
    </View>
  );
}
