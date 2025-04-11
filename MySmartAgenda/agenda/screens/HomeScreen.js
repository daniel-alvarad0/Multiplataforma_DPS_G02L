import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db, auth } from '../utils/firebaseConfig';
import EventCard from '../components/EventCard';

export default function HomeScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'events'), where('userId', '==', auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View>
      {events.length === 0 ? (
        <Text>No hay eventos programados</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <EventCard event={item} onPress={() => navigation.navigate('EditEvent', { event: item })} />
          )}
        />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddEvent')}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#007BFF',
          shadowColor: '#000',
          borderRadius: 30,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <Text style={{ color: 'white', fontSize: 30 }}>agregar</Text>
      </TouchableOpacity>
    </View>
  );
}