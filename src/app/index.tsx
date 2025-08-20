import { View, StatusBar } from "react-native";
import { router } from "expo-router";

import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { Button } from "@/components/Button";
import { HomeHeader } from "@/components/HomeHeader";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6,184.90" },
  output: { label: "Saídas", value: "-R$ 883.90" },
};

const targets = [
  {
    id: "1",
    name: "AppleWatch",
    percentage: "50%",
    current: "R$ 500,00",
    target: "R$ 2.680,00",
  },
  {
    id: "2",
    name: "Comprar uma cadeira ergonomica",
    percentage: "25%",
    current: "R$ 400,00",
    target: "R$ 690,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 22 }}>
        <Button title="Nova Meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
