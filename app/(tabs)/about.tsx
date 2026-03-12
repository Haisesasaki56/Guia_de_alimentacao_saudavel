import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

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
backgroundColor: '#1cc024ff',
alignItems: 'center',
justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
});