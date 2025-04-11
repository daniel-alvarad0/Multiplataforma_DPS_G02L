import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import CameraComponent from '../components/CameraComponent';

export default function HomeScreen() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handleCapture = (photo) => {
    setCapturedPhoto(photo.uri);
    setIsCameraOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Bitácora Visual</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsCameraOpen(true)}
      >
        <Text style={styles.buttonText}>Abrir Cámara</Text>
      </TouchableOpacity>

      {capturedPhoto && (
        <View style={styles.photoContainer}>
          <Text style={styles.photoTitle}>Foto Capturada:</Text>
          <Image source={{ uri: capturedPhoto }} style={styles.photo} />
        </View>
      )}

      <Modal visible={isCameraOpen} animationType="slide">
        <CameraComponent onCapture={handleCapture} />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setIsCameraOpen(false)}
        >
          <Text style={styles.closeButtonText}>Cerrar Cámara</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  photoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photo: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});