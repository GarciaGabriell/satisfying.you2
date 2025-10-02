import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const data = [
    { id: "1", title: "SECOMP 2023", date: "10/10/2023", icon: "laptop-outline" },
    { id: "2", title: "UBUNTU 2022", date: "05/06/2022", icon: "people-outline" },
    { id: "3", title: "MENINAS CPU", date: "01/04/2022", icon: "female-outline" },
    { id: "4", title: "EVENTO X", date: "20/12/2022", icon: "calendar-outline" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.color }]}
      onPress={() => router.push({
        pathname: "/(tabs)/acoes-pesquisa",
        params: { id: item.id, title: item.title, date: item.date, icon: item.icon }
      })}
    >
      <Ionicons name={item.icon} size={48} color="#333" style={{ marginBottom: 10 }} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={{ marginRight: 8 }} />
        <TextInput placeholder="Insira o termo de busca..." style={styles.searchInput} />
      </View>

      {/* Carrossel */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        style={{ marginTop: 20 }}
      />

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/nova-pesquisa")}
      >
        <Text style={styles.buttonText}>NOVA PESQUISA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2576",
    padding: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 15,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    marginRight: 15,
    fontFamily: "Averia Libre",
  },
  cardTitle: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
    textAlign: "center",
    fontFamily: "Averia Libre",
  },
  cardDate: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#2eb86c",
    marginHorizontal: 15,
    marginTop: 30,
    padding: 15,
    alignItems: "center",
    fontFamily: "Averia Libre",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
