import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PreviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { image } = route.params;

  const [comment, setComment] = useState('');
  const [location, setLocation] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Advertencia', 'No se pudo obtener la ubicación. El recuerdo se guardará sin coordenadas.');
        return;
      }
      try {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
      } catch (error) {
        Alert.alert('Error', 'No se pudo obtener la ubicación.');
        console.error(error);
      }
    })();
  }, []);

  const saveMemory = async () => {
    if (!comment.trim()) {
      Alert.alert('Comentario vacío', 'Por favor, escribe un comentario antes de guardar.');
      return;
    }

    setIsSaving(true);
    try {
      // Guardar imagen en media library
      await MediaLibrary.saveToLibraryAsync(image.uri);

      // Crear objeto con info
      const memory = {
        uri: image.uri,
        comment,
        location,
        date: new Date().toISOString(),
      };

      // Guardar archivo JSON en FileSystem
      const filename = `${FileSystem.documentDirectory}${Date.now()}.json`;
      await FileSystem.writeAsStringAsync(filename, JSON.stringify(memory));

      Alert.alert('¡Guardado!', 'Tu recuerdo ha sido guardado.');
      navigation.navigate('Galería');
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el recuerdo.');
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.uri }} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Escribe un comentario..."
        value={comment}
        onChangeText={setComment}
      />
      {isSaving && <Text style={styles.loadingText}>Guardando...</Text>}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff4d4d' }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Descartar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50' }]}
          onPress={saveMemory}
        >
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});