import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db, auth } from '../utils/firebaseConfig';
import EventCard from '../components/EventCard';
import { Ionicons } from '@expo/vector-icons';

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
    <View style={styles.container}>
      {events.length === 0 ? (
        <Text style={styles.noEventsText}>No hay eventos programados</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <EventCard event={item} onPress={() => navigation.navigate('EditEventScreen', { event: item })} />
          )}
        />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddEventScreen')}
        style={styles.addButton}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});