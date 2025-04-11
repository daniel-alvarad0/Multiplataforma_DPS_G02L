import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CameraScreen from './screens/CameraScreen';
import PreviewScreen from './screens/PreviewScreen';
import GalleryScreen from './screens/GalleryScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'slide_from_right', // Transición fluida
        }}
      >
        <Stack.Screen name="Inicio" component={CameraScreen} options={{ title: 'Bitácora Visual' }} />
        <Stack.Screen name="Vista Previa" component={PreviewScreen} options={{ title: 'Vista Previa' }} />
        <Stack.Screen name="Galería" component={GalleryScreen} options={{ title: 'Mis Recuerdos' }} />
        <Stack.Screen name="Detalle" component={DetailScreen} options={{ title: 'Detalle del Recuerdo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}