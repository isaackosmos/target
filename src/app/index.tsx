import { View } from "react-native";

import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { HomeHeader } from "@/components/HomeHeader";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6,184.90" },
  output: { label: "Saídas", value: "-R$ 883.90" },
};

const targets = [
  {
    id: "1",
    name: "aaa",
    percentage: "aaa",
    current: "aaa",
    target: "aaa",
  },
  {
    id: "2",
    name: "aaa",
    percentage: "aaa",
    current: "aaa",
    target: "aaa",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
