import { useSQLiteContext } from "expo-sqlite";

export type TransactionCreate = {
  target_id: number;
  amount: number;
  observation?: string;
};

export function useTransactionsDatabase() {
  const database = useSQLiteContext();

  async function create(data: TransactionCreate) {
    const statement = await database.prepareAsync(`
      INSERT INTO transactions (
        target_id, 
        amount, 
        observation
      ) VALUES (
        $target_id, 
        $amount, 
        $observation 
      )
    `);

    statement.executeAsync({
      $target_id: data.target_id,
      $amount: data.amount,
      $observations: data.observation,
    });
  }

  return {
    create,
  };
}
