import { StyleSheet, Text, View } from "react-native";

import { colors } from "$styles";

export default function NotificationsTab({ title, description }) {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  title: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    color: colors.black.default,
    fontSize: 16,
  },
});
