import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function GalleryScreen({ navigation }) {
  const [memories, setMemories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMemories = async () => {
      try {
        const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        const jsonFiles = files.filter(file => file.endsWith('.json'));

        const loadedMemories = [];
        for (let fileName of jsonFiles) {
          const content = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + fileName);
          const memory = JSON.parse(content);
          loadedMemories.push(memory);
        }

        setMemories(loadedMemories.reverse()); // Mostrar los más recientes primero
      } catch (error) {
        Alert.alert('Error', 'No se pudieron cargar los recuerdos.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const unsubscribe = navigation.addListener('focus', loadMemories); // Recargar al volver

    return unsubscribe;
  }, [navigation]);

  const deleteMemory = async (memory) => {
    try {
      // Eliminar el archivo JSON asociado al recuerdo
      const fileName = `${FileSystem.documentDirectory}${memory.uri.split('/').pop()}.json`;
      await FileSystem.deleteAsync(fileName);

      // Actualizar la lista de recuerdos
      setMemories(memories.filter((m) => m.uri !== memory.uri));
      Alert.alert('Eliminado', 'El recuerdo ha sido eliminado.');
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar el recuerdo.');
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detalle', { memory: item })}
      >
        <Image source={{ uri: item.uri }} style={styles.image} />
        <Text style={styles.comment}>{item.comment}</Text>
        {item.location && (
          <Text style={styles.coords}>
            📍 {item.location.latitude.toFixed(4)}, {item.location.longitude.toFixed(4)}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() =>
          Alert.alert(
            'Eliminar recuerdo',
            '¿Estás seguro de que deseas eliminar este recuerdo?',
            [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Eliminar', style: 'destructive', onPress: () => deleteMemory(item) },
            ]
          )
        }
      >
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loading}>Cargando recuerdos...</Text>
      ) : memories.length === 0 ? (
        <Text style={styles.empty}>No hay recuerdos aún.</Text>
      ) : (
        <FlatList
          data={memories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2} // Mostrar dos columnas
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ padding: 10 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  empty: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    height: 150,
    borderRadius: 8,
  },
  comment: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  coords: {
    marginTop: 4,
    color: '#555',
    fontSize: 12,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});