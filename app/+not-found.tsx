import { View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
   <>
   <Stack.Screen options={{ title: 'Oops! Página não encontrada' }} />
   <View style={styles.container}>
    <Link href="/" style={styles.button}>
    Ir para a Página inicial
    </Link>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
flex: 1,
backgroundColor: '#1cc024ff',
alignItems: 'center',
justifyContent: 'center',
  },

    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
});