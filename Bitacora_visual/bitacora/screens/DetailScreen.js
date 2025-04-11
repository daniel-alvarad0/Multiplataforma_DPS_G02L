import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen() {
  const route = useRoute();
  const { memory } = route.params;

  return (
    <View style={styles.container}>
      {/* Imagen del recuerdo */}
      <Image source={{ uri: memory.uri }} style={styles.image} />
      <Text style={styles.comment}>{memory.comment}</Text>

      {/* Mapa con la ubicación */}
      {memory.location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: memory.location.latitude,
            longitude: memory.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: memory.location.latitude,
              longitude: memory.location.longitude,
            }}
            title="Ubicación del recuerdo"
            description={memory.comment}
          />
        </MapView>
      ) : (
        <Text style={styles.noLocation}>Sin ubicación disponible</Text>
      )}
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
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  comment: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width - 20,
    height: 300,
    marginTop: 15,
    borderRadius: 10,
  },
  noLocation: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
});