import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova transação"
        subTitle="A cada valor guardado você fica mais próximo da sua meta. Se esforçe para guardar e evitar retirar."
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <CurrencyInput label="Valor" value={0} />

        <Input
          label="Motivo (opcional)"
          placeholder="Ex: Investir em CDB de 110% no banco XPTO"
        />

        <Button title="Salvar" onPress={() => {}} />
      </View>
    </View>
  );
}
