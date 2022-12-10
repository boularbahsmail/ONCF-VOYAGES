import { useState } from "react";
import styles from "./App.module.css";
import { StatusBar, View } from "react-native";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";
import SearchHistory from "./components/SearchHistory";

export default function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header language={language} setLanguage={setLanguage} />
      <WelcomingCard language={language} />
      <SearchHistory />
    </View>
  );
}
