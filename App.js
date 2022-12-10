import { useState } from "react";
import { StatusBar, View } from "react-native";
import styles from "./App.module.css";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";
import SearchHistory from "./components/SearchHistory";

// Profile Modal
import ProfileModal from "./components/ProfileModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <ProfileModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
      <Header setModalVisible={setModalVisible} />
      <WelcomingCard />
      <SearchHistory />
    </View>
  );
}
