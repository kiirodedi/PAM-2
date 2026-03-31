import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function MovieCard({ movie, onPress, width }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: width }]}>        
        <Image
          source={{ uri: movie.img_capa }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {movie.nome}
        </Text>
        <Text style={styles.year}>
          {movie.ano}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

