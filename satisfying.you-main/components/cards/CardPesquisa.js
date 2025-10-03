// CardPesquisa.js
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from 'react-native';

const CardPesquisa = ({ nome, data, imagem, icon }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Ícone opcional */}
      {icon && <Ionicons name={icon} size={48} color="#333" style={styles.icon} />}
      
      {/* Imagem opcional */}
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
      
      {/* Nome da pesquisa */}
      <Text style={styles.nome}>{nome}</Text>
      
      {/* Data da pesquisa */}
      <Text style={styles.data}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 140, // Ajuste o tamanho do card conforme necessário
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 20, // Adicionando espaço entre os cards
  },
  icon: {
    marginBottom: 10, // Espaço entre o ícone e a imagem
  },
  imagem: {
    width: '100%', // A imagem ocupa 100% da largura do card
    height: 80, // Altura fixa para evitar distorção
    borderRadius: 8,
    marginBottom: 10, // Espaço entre a imagem e o nome
  },
  nome: {
    fontWeight: "bold",
    marginTop: 5,
    color: "#333",
    textAlign: "center",
    fontSize: 14, // Ajustando o tamanho da fonte
  },
  data: {
    fontSize: 12,
    color: "#666",
    marginTop: 5, // Espaço entre o nome e a data
  },
});

export default CardPesquisa;
