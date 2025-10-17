// ¡Importa los componentes estilizados desde nativewind!

import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-600">
        ¡Expo Router + NativeWind!
      </Text>
    </View>
  );
}