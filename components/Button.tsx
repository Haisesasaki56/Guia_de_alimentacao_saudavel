import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string;
    theme?: 'primary'; // Adicionado o ? porque nem todo botão tem tema
    onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#2e2c2cff', borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#6b6565ff' }]}   onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color='#2c2e31ff' style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#ffffffff' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Você pressionou um botão')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#2e2c2cff',
        fontSize: 16,
    },
});