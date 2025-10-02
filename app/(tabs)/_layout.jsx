import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawer}>
      {/* Email do usuário */}
      <View style={styles.header}>
        <Text style={styles.email}>usuario@dominio.com</Text>
        <View style={styles.divider} />
      </View>

      {/* Item de navegação */}
      <DrawerItem
        label="Pesquisas"
        labelStyle={styles.itemLabel}
        icon={({ color, size }) => (
          <Ionicons name="document-text-outline" size={size} color="#fff" />
        )}
        onPress={() => props.navigation.navigate("home")}
      />

      {/* Spacer */}
      <View style={{ flex: 1 }} />

      {/* Botão de sair */}
      <DrawerItem
        label="Sair"
        labelStyle={styles.itemLabel}
        icon={({ color, size }) => (
          <Ionicons name="log-out-outline" size={size} color="#fff" />
        )}
        onPress={() => console.log("Sair")}
      />
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#2d2174" },
        headerTitleStyle: {fontSize: 28, fontFamily: "Averia Libre"},
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#2d2174", // fundo roxo
        },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: "",
        }}
      />
      <Drawer.Screen
        name="nova-pesquisa"
        options={{
          title: "Nova Pesquisa",
        }}
      />
      <Drawer.Screen
        name="modificar-pesquisa"
        options={{
          title: "Modificar Pesquisa",
          headerLeft: () => {
            const router = useRouter();
            return (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="acoes-pesquisa"
        options={{
          title: "Ações da Pesquisa",
          headerLeft: () => {
            const router = useRouter();
            return (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="coleta-satisfacao"
        options={{
          title: "Coleta de Satisfação",
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="agradecimentos"
        options={{
          headerShown: false,
          title: "Agradecimentos",
        }}
      />
      <Drawer.Screen
        name="relatorio"
        options={{
          title: "Relatório",
          headerLeft: () => {
            const router = useRouter();
            return (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: "#2d2174",
  },
  header: {
    padding: 16,
  },
  email: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#fff",
    opacity: 0.6,
  },
  itemLabel: {
    color: "#fff",
    fontSize: 16,
    marginLeft: -10,
    fontFamily: "Averia Libre",
  },
});
