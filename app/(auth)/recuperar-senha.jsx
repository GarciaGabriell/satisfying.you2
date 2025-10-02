import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const validarEmail = (email) => {
    // Regex simples para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRecuperar = () => {
    if (!validarEmail(email)) {
      setErro("E-mail parece ser inválido");
    } else {
      setErro("");
      alert("Se o e-mail existir no sistema, você receberá instruções para recuperar sua senha.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleRecuperar}>
          <Text style={styles.buttonText}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2174", // fundo roxo
    padding: 20,
    justifyContent: "center",
    alignItems: "center",

  },
  label: {
    color: "#fff",
    fontSize: 28,
    marginBottom: 8,
    fontFamily: "Averia Libre",
  },
  content: {
    width: "70%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    color: "#2d2174",
    fontFamily: "Averia Libre",

  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Averia Libre",

  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    alignItems: "center",
    marginTop: 10,
    fontSize: 18,
    fontFamily: "Averia Libre",

  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Averia Libre",

  },
});
