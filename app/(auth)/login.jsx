import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const validarEmail = (email) => {
    // Regex simples para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!validarEmail(email)) {
      setErro("E-mail parece ser inválido");
    } else if (email !== "jurandir.pereira@hotmail.com" || senha !== "123456") {
      setErro("E-mail e/ou senha inválidos.");
    } else {
      setErro("");
      // Se o login for válido, redireciona para as tabs
      router.replace("/(tabs)/home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Satisfying.you ☺</Text>
      <View style={styles.content}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => router.push("/(auth)/criar-conta")}
        >
          <Text style={styles.buttonText}>Criar minha conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonEsqueciSenha}
          onPress={() => router.push("/(auth)/recuperar-senha")}
        >
          <Text style={styles.buttonText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2174", // cor de fundo principal
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    fontFamily: "Averia Libre",
  },
  content: {
    width: "70%",
  },
  label: {
    //alignSelf: "left",
    //marginLeft: 20,
    color: "#fff",
    fontSize: 24,
    marginTop: 5,
    textAlign: "left",
    fontFamily: "Averia Libre",
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "Averia Libre",
  },
  error: {
    color: "red",
    marginBottom: 5,
    fontSize: 14,
    fontFamily: "Averia Libre",
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
    buttonCreate: {
    width: "100%",
    height: 45,
    backgroundColor: "#419ED7",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,

  },
    buttonEsqueciSenha: {
    width: "100%",
    height: 45,
    backgroundColor: "#B0CCDE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Averia Libre",
  },
});
