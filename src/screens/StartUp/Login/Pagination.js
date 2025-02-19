import { Animated, Dimensions, StyleSheet, View } from "react-native";

import { colors } from "$styles";

const { width } = Dimensions.get("screen");

export default function Pagination({ items, scrollX }) {
  return (
    <View style={styles.container}>
      {items.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            colors.grey.lighter,
            colors.white.default,
            colors.grey.lighter,
          ],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, { width: dotWidth, backgroundColor }]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 35,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "magenta",
  },
  dotActive: {
    backgroundColor: "magenta",
  },
});
