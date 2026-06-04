import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#25292e' },
          headerShadowVisible: false,
          headerTintColor: '#fff',
        }}
      >
        {/* A linha abaixo é a única que o slide pediu */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Mantendo a rota antiga por segurança */}
        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}