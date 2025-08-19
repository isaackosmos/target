import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  label: {
    fontSize: 10,
    color: colors.blue[300],
    fontFamily: fontFamily.regular,
  },
  value: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.regular,
  },
});
