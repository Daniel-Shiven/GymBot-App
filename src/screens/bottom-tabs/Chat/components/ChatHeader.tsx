import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

import { colors } from "$styles";

import * as Font from "expo-font";

export default function MainHeader({ text, children }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "clash-grotesk-semibold": require("$assets/fonts/ClashGrotesk-Semibold.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        paddingBottom: 6,
        width: "100%",
        display: "flex",
        zIndex: 1,
        shadowColor: colors.black.default,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: colors.blue.default,
      }}
    >
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 8,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <Image
          source={require("$assets/circleicon.png")}
          style={{
            width: 60, // Adjust the size as needed
            height: 60, // Adjust the size as needed
            borderRadius: 30,
            borderWidth: 1,
            borderColor: colors.white.default,
            marginTop: 2,
            marginLeft: 30,
            marginRight: 8,
          }}
        />
        <View style={{ marginLeft: 10, marginBottom: -5 }}>
          <Text
            style={{
              fontSize: 52,
              color: colors.white.default,
              fontFamily: "clash-grotesk-semibold",
              fontWeight: "bold",
              letterSpacing: 1.5,
              shadowColor: colors.black.default,
              shadowOffset: { width: 3, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5, // For Android shadow
            }}
          >
            {text}
          </Text>
        </View>

        {/* You could use children to put buttons in, eg. in navbarScreens/Chat */}

        {children ? (
          <View
            style={{
              marginLeft: "auto",
              marginRight: 16,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            {children}
          </View>
        ) : null}
      </View>
    </View>
  );
}
