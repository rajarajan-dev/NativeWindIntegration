import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-400">
      <View className="bg-white p-10 rounded-lg shadow-lg m-5 border-red-500 border-4">
        <Text className="text-red-500">
          Open up App.tsx to start working on your app!
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
