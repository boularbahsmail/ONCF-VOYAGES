import { StatusBar, View } from "react-native";
import styles from "./App.module.css";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";
import SearchHistory from "./components/SearchHistory";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <WelcomingCard language={language} />
      <SearchHistory />
    </View>
  );
}
