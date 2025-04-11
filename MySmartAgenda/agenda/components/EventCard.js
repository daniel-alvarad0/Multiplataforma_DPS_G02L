import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';

export default function EventCard({ event, onPress }) {
  const eventDate = new Date(event.datetime);
  const now = new Date();

  const getColor = () => {
    if (eventDate.toDateString() === now.toDateString()) return 'green';
    if (eventDate < now) return 'red';
    return 'blue';
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: getColor(), margin: 10, padding: 10, borderRadius: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>{event.title}</Text>
        <Text>{event.category} - {dayjs(event.datetime).format('DD/MM/YYYY HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
}