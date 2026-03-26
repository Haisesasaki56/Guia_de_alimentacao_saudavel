import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Voce não selecionou nenhuma imagem");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        {/* 2. Conectando a função ao botão com onPress */}
        <Button
          theme="primary"
          label="Escolha uma foto"
          onPress={pickImageAsync}
        />

        {/* Adicionei o onPress aqui também se quiser que eles façam algo */}
        <Button
          label="Usar esta foto"
          onPress={() => alert("Foto selecionada!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f9c38ff",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
