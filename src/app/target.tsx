import { Alert, View } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { router, useLocalSearchParams } from "expo-router";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";

import { useTargetDatabase } from "@/database/useTargetDatabase";

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>();
  const targetDatabase = useTargetDatabase();

  function handleSave() {
    if (!name.trim() || amount <= 0)
      return Alert.alert("Atenção", "Preencha nome e valor");

    setIsProcessing(true);

    if (params.id) {
      update();
    } else {
      create();
    }
  }

  async function update() {
    try {
      await targetDatabase.update({
        id: Number(params.id),
        name,
        amount,
      });

      Alert.alert("Sucesso", "Meta atualizada com sucesso!", [
        { text: "Ok", onPress: () => router.back() },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar a meta.");
      console.log(error);
      setIsProcessing(false);
    }
  }

  async function create() {
    try {
      await targetDatabase.create({ name, amount });
      Alert.alert("Nova Meta", "Meta criada com sucesso.", [
        { text: "Ok", onPress: () => router.back() },
      ]);
    } catch (e) {
      Alert.alert("Erro", "Não foi possivel criar a meta.");
      console.log(e);
      setIsProcessing(false);
    }
  }

  async function fetchDetails(id: number) {
    try {
      const response = await targetDatabase.show(id);
      setName(response.name);
      setAmount(response.amount);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os detalhes da meta.");
      console.log(error);
    }
  }

  function handleRemove() {
    if (!params.id) return;

    Alert.alert("Remover", "Deseja realmente remover?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => remove() },
    ]);
  }

  async function remove() {
    try {
      setIsProcessing(true);

      await targetDatabase.remove(Number(params.id));
      Alert.alert("Meta", "Meta removida!", [
        { text: "Ok", onPress: () => router.replace("/") },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel remover a meta.");
      console.log(error);
    }
  }

  useEffect(() => {
    if (params.id) fetchDetails(Number(params.id));
  }, [params.id]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <StatusBar style="dark" />

      <PageHeader
        title="Meta"
        subTitle="Economize para alcançar sua meta financeira"
        rightButton={
          params.id && { icon: "delete", onPress: () => handleRemove() }
        }
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
          onChangeText={setName}
          value={name}
        />

        <CurrencyInput
          label="Valor alvo"
          value={amount}
          onChangeValue={setAmount}
        />

        <Button title="Salvar" onPress={handleSave} isLoading={isProcessing} />
      </View>
    </View>
  );
}
