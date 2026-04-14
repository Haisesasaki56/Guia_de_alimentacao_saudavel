import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.indicator} />
        <Text style={styles.text}>
          Este guia foi desenvolvido para auxiliar na sua jornada de alimentação
          saudável.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/")}
      >
        <Text style={styles.buttonText}>IR PARA PÁGINA INICIAL</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#3a3f47",
    borderRadius: 8,
    marginBottom: 30,
    overflow: "hidden",
  },
  indicator: { width: 4, backgroundColor: "#ffd33d" },
  text: { color: "white", fontSize: 16, padding: 20, textAlign: "center" },
  button: {
    backgroundColor: "#ffd33d",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: { color: "#25292e", fontWeight: "bold", fontSize: 14 },
});
