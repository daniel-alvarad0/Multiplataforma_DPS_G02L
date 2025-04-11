import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { db, auth } from '../utils/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

export default function AddEventScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [participants, setParticipants] = useState('');
  const [datetime, setDatetime] = useState(new Date().toISOString());

  const handleAdd = async () => {
    await addDoc(collection(db, 'events'), {
      userId: auth.currentUser.uid,
      title,
      category,
      participants,
      datetime
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Categoría</Text>
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        placeholderTextColor="#888"
        value={category}
        onChangeText={setCategory}
      />
      <Text style={styles.label}>Participantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Participantes"
        placeholderTextColor="#888"
        value={participants}
        onChangeText={setParticipants}
      />
      <Text style={styles.label}>Fecha y hora</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha y hora"
        placeholderTextColor="#888"
        value={datetime}
        onChangeText={setDatetime}
      />
      <Button title="Guardar evento" onPress={handleAdd} color="#007BFF" />
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
});
