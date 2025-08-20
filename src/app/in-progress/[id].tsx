import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { List } from "@/components/List";
import { Progress } from "@/components/Progress";
import { PageHeader } from "@/components/PageHeader";
import { Transaction, TransactionProps } from "@/components/Transaction";
import { TransactionTypes } from "@/utils/TransactionTypes";

const details = {
  current: "R$ 580,00",
  target: "R$ 1.790,00",
  percentage: 25,
};

const transactions: TransactionProps[] = [
  {
    id: "1",
    value: "R$ 100,00",
    date: "2023-10-01",
    description: "Compra de café",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "R$ 50,00",
    date: "2023-10-02",
    description: "Pagamento de conta",
    type: TransactionTypes.Output,
  },
];

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => {},
        }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        keyExtractor={(item) => item.id}
        // emptyListMessage="Nenhuma transação encontrada."
      />
    </View>
  );
}
