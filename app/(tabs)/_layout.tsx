import { Tabs } from 'expo-router'

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Página inicial'}} />
            <Tabs.Screen name="about" options={{ title: 'Sobre nós'}} />
        </Tabs>
    );
}