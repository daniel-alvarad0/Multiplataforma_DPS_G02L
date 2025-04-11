import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
    <View>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Categoría" value={category} onChangeText={setCategory} />
      <TextInput placeholder="Participantes" value={participants} onChangeText={setParticipants} />
      <TextInput placeholder="Fecha y hora" value={datetime} onChangeText={setDatetime} />
      <Button title="Guardar evento" onPress={handleAdd} />
    </View>
  );
}
