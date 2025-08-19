import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Separator } from "@/components/Separator";
import { SummaryProps, Summary } from "@/components/Summary";

import { styles } from "./styles";
import { colors } from "@/theme/colors";

export type HomeHeaderProps = {
  total: string;
  input: SummaryProps;
  output: SummaryProps;
};

type Props = {
  data: HomeHeaderProps;
};

export function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}> Total que voce possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator color={colors.blue[400]} />

      <View style={styles.summary}>
        <Summary
          data={data.input}
          icon={{ name: "arrow-upward", color: colors.green[500] }}
        />
        <Summary
          data={data.output}
          icon={{ name: "arrow-downward", color: colors.red[400] }}
          isLeft
        />
      </View>

      <View></View>
    </LinearGradient>
  );
}
