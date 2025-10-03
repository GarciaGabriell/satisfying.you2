import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AcoesPesquisa() {
  const { id, title, date, icon } = useLocalSearchParams();
  const navigation = useNavigation();

  // Atualiza o título do header dinamicamente
  useEffect(() => {
    navigation.setOptions({
      title: title || "Ações da Pesquisa",
    });
  }, [title]);

  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push({
            pathname: "/(tabs)/modificar-pesquisa",
            params: { id: id, title: title, date: date, icon: icon}
          })}
        >
          <Ionicons name="create-outline" size={100} color="#fff" />
          <Text style={styles.cardText}>Modificar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push({
            pathname: "/(tabs)/coleta-satisfacao",
            params: { id: id, title: title, date: date, icon: icon}
          })}
        >
          <Ionicons name="checkbox-outline" size={100} color="#fff" />
          <Text style={styles.cardText}>Coletar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push({
            pathname: "/(tabs)/relatorio",
            params: { id: id, title: title, date: date, icon: icon}
          })}
        >
          <Ionicons name="pie-chart-outline" size={100} color="#fff" />
          <Text style={styles.cardText}>Relatório</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a143a", // fundo roxo escuro
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 80,
    paddingHorizontal: 20,
  },
  card: {
    width: 271,
    height: 238,
    backgroundColor: "#2c1f5c",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Averia Libre",
  },
  cardText: {
    marginTop: 8,
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
