import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function EventCard({ event, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.category}>{event.category}</Text>
      <Text style={styles.datetime}>{new Date(event.datetime).toLocaleString()}</Text>
      <Text style={styles.participants}>Participantes: {event.participants}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#AAAAAA',
    marginBottom: 5,
  },
  datetime: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 5,
  },
  participants: {
    fontSize: 14,
    color: '#888888',
  },
});