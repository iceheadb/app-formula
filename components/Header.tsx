import { StyleSheet, View, Text } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquise por marca ou fórmula!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#2f90e4",
    paddingVertical: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#fefefe",
  },
});
