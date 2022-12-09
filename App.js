import { useState } from "react";
import styles from "./App.module.css";
import { View } from "react-native";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";

export default function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <View style={styles.container}>
      <Header language={language} setLanguage={setLanguage} />
      <WelcomingCard language={language} />
    </View>
  );
}
