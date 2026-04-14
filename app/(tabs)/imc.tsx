import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function IMCScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [situacao, setSituacao] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.')) ;

    if (p > 0 && a > 0) {
      const imc = p / (a * a);
      setResultado(imc);

      if (imc < 18.5) setSituacao('Abaixo do peso');
      else if (imc < 25) setSituacao('Peso normal');
      else if (imc < 30) setSituacao('Sobrepeso');
      else setSituacao('Obesidade');
      
      Keyboard.dismiss();
    } else {
      alert('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
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
            Situação: {situacao}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});