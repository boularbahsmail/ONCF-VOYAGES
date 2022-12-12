import { useState } from "react";
import { StatusBar, View } from "react-native";
import styles from "./App.module.css";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";
import SearchHistory from "./components/SearchHistory";

// Modals
import Profile from "./Modals/Profile";
import NewTicket from "./Modals/NewTicket";
import MyTickets from "./Modals/MyTickets";

import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const fontsLoaded = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [newTicketVisible, setNewTicketVisible] = useState(false);
  const [myTicketsVisible, setMyTicketsVisible] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  
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
