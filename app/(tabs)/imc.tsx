import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, ScrollView } from 'react-native';

export default function IMCScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [situacao, setSituacao] = useState('');
  const [feedback, setFeedback] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));

    if (p > 0 && a > 0) {
      const imc = p / (a * a);
      setResultado(imc);

      if (imc < 18.5) {
        setSituacao('Abaixo do peso');
        setFeedback('Atenção: Procure incluir mais proteínas e carboidratos complexos na sua dieta para atingir um peso saudável.');
      } else if (imc < 25) {
        setSituacao('Peso normal');
        setFeedback('Parabéns! Você está no caminho certo. Continue com sua alimentação equilibrada e prática de exercícios.');
      } else if (imc < 30) {
        setSituacao('Sobrepeso');
        setFeedback('Cuidado: Tente reduzir o consumo de ultraprocessados e foque em alimentos naturais e fibras.');
      } else {
        setSituacao('Obesidade');
        setFeedback('Alerta de saúde: Recomendamos a consulta com um nutricionista para um plano alimentar focado em saúde metabólica.');
      }
      
      Keyboard.dismiss();
    } else {
      alert('Por favor, insira valores válidos.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Peso (ex: 75.5)"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Altura (ex: 1.75)"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC: {resultado.toFixed(2)}</Text>
          <Text style={[styles.resultText, { fontWeight: 'bold', color: '#ffd33d' }]}>
            {situacao}
          </Text>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackText}>{feedback}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#3a3f47',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ffd33d',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#25292e',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 5,
  },
  feedbackBox: {
    backgroundColor: '#3a3f47',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#ffd33d',
  },
  feedbackText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});