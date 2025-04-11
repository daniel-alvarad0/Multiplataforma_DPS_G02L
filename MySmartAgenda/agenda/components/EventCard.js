import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function EventCard({ event, onPress }) {
  const getCardStyle = () => {
    const eventDate = new Date(event.datetime);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (eventDate < today) {
      return styles.pastEvent; // Rojo: eventos pasados
    } else if (eventDate.toDateString() === today.toDateString()) {
      return styles.todayEvent; // Verde: eventos de hoy
    } else {
      return styles.futureEvent; // Azul: eventos futuros
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, getCardStyle()]}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.category}>{event.category}</Text>
      <Text style={styles.datetime}>{new Date(event.datetime).toLocaleString()}</Text>
      <Text style={styles.participants}>Participantes: {event.participants}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
  pastEvent: {
    backgroundColor: '#FF4D4D', // Rojo
  },
  todayEvent: {
    backgroundColor: '#4CAF50', // Verde
  },
  futureEvent: {
    backgroundColor: '#007BFF', // Azul
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