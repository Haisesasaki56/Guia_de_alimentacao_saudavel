import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useTarefas } from '../hooks/useTarefas';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, AdicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tabela Nutricional</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um alimento..."
                    placeholderTextColor="#9ba1a6"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                {/* Botão padronizado com o estilo do IMC */}
                <TouchableOpacity style={styles.buttonMain} onPress={AdicionarTarefa}>
                    <Text style={styles.buttonText}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <View style={styles.indicator} />
                        <View style={styles.cardContent}>
                            <Text style={styles.tarefaTexto}>{item.texto}</Text>
                            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                                <Text style={styles.remover}>❌</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#25292e' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#fff' },
    inputContainer: { marginBottom: 20 },
    input: {
        backgroundColor: '#3a3f47',
        color: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    buttonMain: {
        backgroundColor: '#ffd33d',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: { color: '#25292e', fontWeight: 'bold', fontSize: 16 },
    // Estilo de Cartão baseado no feedback do IMC
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#3a3f47',
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    indicator: { width: 4, backgroundColor: '#ffd33d' },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
    },
    tarefaTexto: { fontSize: 16, color: '#fff' },
    remover: { fontSize: 18 },
});