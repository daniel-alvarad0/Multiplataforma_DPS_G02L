import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { db } from '../utils/firebaseConfig';
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function EditEventScreen({ route, navigation }) {
  const { event } = route.params;
  const [title, setTitle] = useState(event.title);
  const [category, setCategory] = useState(event.category);
  const [participants, setParticipants] = useState(event.participants);
  const [datetime, setDatetime] = useState(event.datetime);

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'events', event.id), {
        title, category, participants, datetime
      });
      Alert.alert('Éxito', 'Evento actualizado correctamente');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'No se pudo actualizar el evento');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'events', event.id));
      Alert.alert('Éxito', 'Evento eliminado correctamente');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar el evento');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Categoría</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Categoría"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Participantes</Text>
      <TextInput
        style={styles.input}
        value={participants}
        onChangeText={setParticipants}
        placeholder="Participantes"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Fecha y hora</Text>
      <TextInput
        style={styles.input}
        value={datetime}
        onChangeText={setDatetime}
        placeholder="Fecha y hora"
        placeholderTextColor="#888"
      />
      <View style={styles.buttonContainer}>
        <Button title="Actualizar" onPress={handleUpdate} color="#007BFF" />
        <Button title="Eliminar" onPress={handleDelete} color="#FF4D4D" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
