import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre nós</Text>
      <Link href="/(tabs)/" style={styles.button}>
        Ir para página inicial
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#fff",
  },
});