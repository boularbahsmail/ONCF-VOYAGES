import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import WelcomingCard from "./components/WelcomingCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <WelcomingCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#2f0583",
    flex: 1,
  },
});
