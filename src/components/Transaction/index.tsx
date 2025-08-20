import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { TransactionTypes } from "@/utils/TransactionTypes";

import { styles } from "./styles";
import { colors } from "@/theme";

export type TransactionProps = {
  id: string;
  value: string;
  date: string;
  description?: string;
  type: TransactionTypes;
};

type Props = {
  data: TransactionProps;
  onRemove?: () => void;
};

export function Transaction({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={
          data.type === TransactionTypes.Input
            ? "arrow-upward"
            : "arrow-downward"
        }
        size={20}
        color={
          data.type === TransactionTypes.Input
            ? colors.blue[500]
            : colors.red[400]
        }
      />

      <View style={styles.info}>
        <Text style={styles.value}>{data.value}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {data.date} {data.description && ` • ${data.description}`}
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.7} onPress={onRemove}>
        <MaterialIcons name="close" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
