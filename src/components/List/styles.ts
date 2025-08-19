import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 16,
    paddingTop: 16,
    paddingBottom: 72,
  },
  title: {
    marginTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },
  empty: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
  },
});
