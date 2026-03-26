import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00fa3eff",
        headerStyle: {
          backgroundColor: "#444950ff",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#444950ff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Página inicial",
          tabBarIcon: ({ color, focused }) => (
            <Octicons
              name={focused ? "home-fill" : "home"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre nós",
          tabBarIcon: ({ color, focused }) => (
            <Octicons
              name={focused ? "question" : "globe"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="listaAlimentos"
        options={{
          title: "Tabela Nutricional",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "food-fork-drink" : "food-fork-drink"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
