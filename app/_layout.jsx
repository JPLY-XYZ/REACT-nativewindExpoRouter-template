import "../global.css"; // ¡Mueve la importación del CSS aquí!
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // Asegúrate de envolver la app con el Provider
   
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>

  );
}