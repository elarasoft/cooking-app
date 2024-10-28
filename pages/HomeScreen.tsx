import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CookList } from "@/components/CookList";

export const HomeScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/bg.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome World!</ThemedText>
      </ThemedView>
      <CookList itemSize={5} />
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  menu: {
    width: "50%",
    zIndex: 999,
  },
  menuItem: {
    fontSize: 16,
    lineHeight: 24,
    zIndex: 999,
  },
  dropdownButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
    borderColor: "#444",
  },
  dropdownButtonText: {
    color: "#444",
    fontSize: 16,
    textAlign: "center",
  },
});
