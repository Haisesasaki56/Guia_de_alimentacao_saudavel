import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}> 
     <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image} />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
flex: 1,
backgroundColor: '#1cc024ff',
alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  imagem: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
  