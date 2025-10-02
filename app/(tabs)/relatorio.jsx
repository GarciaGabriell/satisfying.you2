import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AcoesPesquisa() {
  const { id, title, date, icon } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>
        Relatório
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2174",
    padding: 20,
    justifyContent: "center",
  },
});
