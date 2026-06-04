import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Alimento {
  id: string;
  nome: string;
  calorias: number;
  carboidratos: number;
  proteinas: number;
}

// O MAIOR BANCO DE DADOS LOCAL - 100% em Português, Sem Marcas e Sem Erros
const BANCO_COMPLETO: Record<string, Omit<Alimento, "id">> = {
  // Pratos e Acompanhamentos Básicos
  arroz: {
    nome: "Arroz Branco Cozido (100g)",
    calorias: 130,
    carboidratos: 28,
    proteinas: 2,
  },
  feijao: {
    nome: "Feijão Carioca Cozido (100g)",
    calorias: 76,
    carboidratos: 14,
    proteinas: 5,
  },
  feijão: {
    nome: "Feijão Carioca Cozido (100g)",
    calorias: 76,
    carboidratos: 14,
    proteinas: 5,
  },
  macarrao: {
    nome: "Macarrão Cozido (100g)",
    calorias: 157,
    carboidratos: 31,
    proteinas: 6,
  },
  macarrão: {
    nome: "Macarrão Cozido (100g)",
    calorias: 157,
    carboidratos: 31,
    proteinas: 6,
  },
  lasanha: {
    nome: "Lasanha à Bolonhesa (fatia)",
    calorias: 350,
    carboidratos: 38,
    proteinas: 18,
  },
  pure: {
    nome: "Purê de Batata (100g)",
    calorias: 112,
    carboidratos: 15,
    proteinas: 2,
  },
  purê: {
    nome: "Purê de Batata (100g)",
    calorias: 112,
    carboidratos: 15,
    proteinas: 2,
  },

  // Proteínas e Carnes
  ovo: {
    nome: "Ovo Frito (1 unidade)",
    calorias: 196,
    carboidratos: 1,
    proteinas: 14,
  },
  frango: {
    nome: "Peito de Frango Grelhado (100g)",
    calorias: 165,
    carboidratos: 0,
    proteinas: 31,
  },
  carne: {
    nome: "Carne Bovina Grelhada (100g)",
    calorias: 250,
    carboidratos: 0,
    proteinas: 26,
  },
  peixe: {
    nome: "Peixe Grelhado (100g)",
    calorias: 109,
    carboidratos: 0,
    proteinas: 23,
  },

  // Doces, Bolos e Sobremesas (Sem marcas gringas!)
  bolo: {
    nome: "Bolo Simples Caseiro (fatia)",
    calorias: 371,
    carboidratos: 53,
    proteinas: 5,
  },
  cake: {
    nome: "Bolo Simples Caseiro (fatia)",
    calorias: 371,
    carboidratos: 53,
    proteinas: 5,
  },
  pudim: {
    nome: "Pudim de Leite Condensado",
    calorias: 304,
    carboidratos: 48,
    proteinas: 5,
  },
  brigadeiro: {
    nome: "Brigadeiro Gourmet (unid)",
    calorias: 60,
    carboidratos: 9,
    proteinas: 1,
  },
  chocolate: {
    nome: "Chocolate ao Leite (fatia)",
    calorias: 535,
    carboidratos: 59,
    proteinas: 8,
  },
  sorvete: {
    nome: "Sorvete de Creme (1 bola)",
    calorias: 207,
    carboidratos: 24,
    proteinas: 4,
  },
  acai: {
    nome: "Açaí na Tigela Puro (100g)",
    calorias: 110,
    carboidratos: 18,
    proteinas: 1,
  },
  açaí: {
    nome: "Açaí na Tigela Puro (100g)",
    calorias: 110,
    carboidratos: 18,
    proteinas: 1,
  },

  // Fast Food e Salgados
  hamburguer: {
    nome: "Hambúrguer com Queijo",
    calorias: 295,
    carboidratos: 30,
    proteinas: 15,
  },
  hambúrguer: {
    nome: "Hambúrguer com Queijo",
    calorias: 295,
    carboidratos: 30,
    proteinas: 15,
  },
  pizza: {
    nome: "Pizza de Mozzarela (fatia)",
    calorias: 266,
    carboidratos: 33,
    proteinas: 11,
  },
  coxinha: {
    nome: "Coxinha de Frango (unidade)",
    calorias: 280,
    carboidratos: 30,
    proteinas: 8,
  },
  pastel: {
    nome: "Pastel de Carne (unidade)",
    calorias: 320,
    carboidratos: 35,
    proteinas: 9,
  },
  "batata frita": {
    nome: "Batata Frita Porção (100g)",
    calorias: 312,
    carboidratos: 41,
    proteinas: 3,
  },
  sushi: {
    nome: "Sushi Variado (Combo 4 unid)",
    calorias: 140,
    carboidratos: 28,
    proteinas: 3,
  },

  // Saladas, Frutas e Saudáveis
  tomate: {
    nome: "Tomate Vermelho (100g)",
    calorias: 18,
    carboidratos: 4,
    proteinas: 1,
  },
  alface: {
    nome: "Alface Fresca (100g)",
    calorias: 14,
    carboidratos: 3,
    proteinas: 1,
  },
  banana: {
    nome: "Banana Prata (1 unidade)",
    calorias: 98,
    carboidratos: 26,
    proteinas: 1,
  },
  maca: {
    nome: "Maçã Vermelha (1 unidade)",
    calorias: 52,
    carboidratos: 14,
    proteinas: 0,
  },
  maçã: {
    nome: "Maçã Vermelha (1 unidade)",
    calorias: 52,
    carboidratos: 14,
    proteinas: 0,
  },

  // Café da Manhã e Laticínios
  pao: {
    nome: "Pão Francês (1 unidade)",
    calorias: 150,
    carboidratos: 29,
    proteinas: 4.5,
  },
  pão: {
    nome: "Pão Francês (1 unidade)",
    calorias: 150,
    carboidratos: 29,
    proteinas: 4.5,
  },
  leite: {
    nome: "Leite Integral (Copo 200ml)",
    calorias: 120,
    carboidratos: 10,
    proteinas: 6,
  },
  queijo: {
    nome: "Queijo Muçarela (Fatia)",
    calorias: 90,
    carboidratos: 0,
    proteinas: 7,
  },
};

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  const buscarEAdicionarAlimento = () => {
    if (!novaTarefa.trim()) {
      setMensagemErro("Digite o nome de um alimento antes de adicionar!");
      return;
    }

    setCarregando(true);
    setMensagemErro(null);

    // Efeito visual rápido de 200ms para simular a busca
    setTimeout(() => {
      const termoBusca = novaTarefa.trim().toLowerCase();
      const alimentoEncontrado = BANCO_COMPLETO[termoBusca];

      if (alimentoEncontrado) {
        const novoAlimento: Alimento = {
          id: Math.random().toString(),
          ...alimentoEncontrado,
        };

        setAlimentos((listaAtual) => [novoAlimento, ...listaAtual]);
        setNovaTarefa("");
      } else {
        setMensagemErro(
          "Não encontrado. Tente: Arroz, Feijão, Tomate, Bolo, Hambúrguer, Pudim, Coxinha...",
        );
      }
      setCarregando(false);
    }, 200);
  };

  const removerAlimento = (id: string) => {
    setAlimentos((listaAtual) => listaAtual.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tabela Nutricional</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Busque: Arroz, Bolo, Tomate, Hambúrguer, Pudim..."
          placeholderTextColor="#9ba1a6"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        {mensagemErro && (
          <Text style={styles.erroTexto}>⚠️ {mensagemErro}</Text>
        )}

        <TouchableOpacity
          style={styles.buttonMain}
          onPress={buscarEAdicionarAlimento}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#25292e" />
          ) : (
            <Text style={styles.buttonText}>ADICIONAR ALIMENTO</Text>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={alimentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.indicator} />
            <View style={styles.cardContent}>
              <View style={styles.infoTextoContainer}>
                <Text style={styles.tarefaTexto} numberOfLines={1}>
                  {item.nome}
                </Text>
                <Text style={styles.valoresNutricionais}>
                  🔥 {item.calorias} kcal | 🍞 Carb: {item.carboidratos}g | 💪
                  Prot: {item.proteinas}g
                </Text>
              </View>
              <TouchableOpacity onPress={() => removerAlimento(item.id)}>
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
  container: { flex: 1, padding: 20, backgroundColor: "#25292e" },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  inputContainer: { marginBottom: 20 },
  input: {
    backgroundColor: "#3a3f47",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  erroTexto: {
    color: "#ff5555",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "500",
    paddingHorizontal: 5,
  },
  buttonMain: {
    backgroundColor: "#ffd33d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    height: 52,
    justifyContent: "center",
  },
  buttonText: { color: "#25292e", fontWeight: "bold", fontSize: 16 },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#3a3f47",
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  indicator: { width: 4, backgroundColor: "#ffd33d" },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  infoTextoContainer: {
    flex: 1,
    paddingRight: 10,
  },
  tarefaTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
  valoresNutricionais: { fontSize: 12, color: "#b0b5bc", marginTop: 4 },
  remover: { fontSize: 18 },
});
