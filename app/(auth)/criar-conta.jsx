import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CriarConta() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [erro, setErro] = useState("");

  const validarEmail = (email) => {
    // Regex simples para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleCadastrar = () => {
    if (!validarEmail(email)) {
      setErro("E-mail parece ser inválido");
    }
    else if (senha !== repetirSenha) {
      setErro("O campo repetir senha difere da senha");
    } else {
      setErro("");
      alert("Conta criada com sucesso!");
      // Após criar a conta, volta para login
      router.replace("/(auth)/login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        {/* Campos */}
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

        <Text style={styles.label}>Repetir senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={repetirSenha}
          onChangeText={setRepetirSenha}
        />

        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        {/* Botão cadastrar */}
        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2174",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  content:{
    width: "70%" 
  },
  voltar: {
    fontSize: 26,
    color: "#fff",
    marginRight: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  label: {
    color: "#fff",
    fontSize: 28,
    marginTop: 12,
    fontFamily: "Averia Libre",

  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 18,
    fontFamily: "Averia Libre",

  },
  error: {
    color: "red",
    marginTop: 8,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: "Averia Libre",
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    fontFamily: "Averia Libre",

  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
