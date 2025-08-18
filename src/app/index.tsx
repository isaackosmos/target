import { Button, Text, View } from "react-native";
import { router } from "expo-router";
import { fontFamily } from "@/theme/fontFamily";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: fontFamily.bold }}>Ola expo router!</Text>

      <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      <Button
        title="Transacao"
        onPress={() => router.navigate("/transaction/665890")}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/12")}
      />
    </View>
  );
}
