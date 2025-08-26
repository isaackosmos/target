import { useSQLiteContext } from "expo-sqlite";

export type TargetCreate = {
  name: string;
  amount: number;
};

export function useTargetDatabase() {
  const database = useSQLiteContext();

  async function create(data: TargetCreate) {
    const statement = await database.prepareAsync(
      "INSERT INTO targets (name, amount) VALUES ($name, $amount)"
    );

    statement.executeAsync({
      $name: data.name,
      $amount: data.amount,
    });
  }

  return {
    create,
  };
}
