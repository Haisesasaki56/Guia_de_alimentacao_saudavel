import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        tabBarInactiveTintColor: "#9ba1a6", // Cor para abas não selecionadas
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
          borderTopWidth: 0,
          elevation: 0, // Remove sombra no Android
          height: Platform.OS === "ios" ? 90 : 70, // Altura otimizada
          paddingBottom: Platform.OS === "ios" ? 30 : 12, // Espaço para barra de gestos
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarIconStyle: {
          marginBottom: -2, // Ajuste fino na posição do ícone
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="listaAlimentos"
        options={{
          title: "Alimentos",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "fast-food" : "fast-food-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="imc"
        options={{
          title: "IMC",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
