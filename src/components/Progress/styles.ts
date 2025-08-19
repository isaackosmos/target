import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 5,
  },
  status: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  value: {
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.black,
    flex: 1,
  },
  target: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
  },
  percentage: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
  },
  progress: {
    marginTop: 16,
    width: "100%",
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.gray[300],
    overflow: "hidden",
  },
  currentProgress: {
    height: 5,
    backgroundColor: colors.blue[500],
  },
});
