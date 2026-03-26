import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '../hooks/useTarefas';

export default function App () {
    const {tarefas, novaTarefa, setNovaTarefa, AdicionarTarefa, removerTarefa} = useTarefas();

    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Tabela Nutricional </Text>

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Digite um alimento..."
                value={novaTarefa}
                onChangeText={setNovaTarefa}
                />
                <Button title="Adicionar" onPress={AdicionarTarefa} />
        </View>

        <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.tarefaContainer}>
              <Text style={styles.tarefaTexto}>{item.texto}</Text>
              <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                <Text style={styles.remover}> ❌ </Text>
              </TouchableOpacity>
            </View>
        )}
    />
</View>
);
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: '#2f9c38ff'},
    titulo: {fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20},
    inputContainer: {flexDirection: 'row', marginBottom: 10},
    input: {flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10},
    tarefaContainer: {flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15,
        marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
    tarefaTexto: {fontSize: 16 },
    remover: { fontSize: 18, color: 'red'},
    });
