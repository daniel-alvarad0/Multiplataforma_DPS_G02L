import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db } from '../utils/firebaseConfig';
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function EditEventScreen({ route, navigation }) {
  const { event } = route.params;
  const [title, setTitle] = useState(event.title);
  const [category, setCategory] = useState(event.category);
  const [participants, setParticipants] = useState(event.participants);
  const [datetime, setDatetime] = useState(event.datetime);

  const handleUpdate = async () => {
    await updateDoc(doc(db, 'events', event.id), {
      title, category, participants, datetime
    });
    navigation.goBack();
  };

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'events', event.id));
    navigation.goBack();
  };

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} />
      <TextInput value={category} onChangeText={setCategory} />
      <TextInput value={participants} onChangeText={setParticipants} />
      <TextInput value={datetime} onChangeText={setDatetime} />
      <Button title="Actualizar" onPress={handleUpdate} />
      <Button title="Eliminar" onPress={handleDelete} color="red" />
    </View>
  );
}
