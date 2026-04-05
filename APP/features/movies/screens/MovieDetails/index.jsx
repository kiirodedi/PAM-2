import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import ActorCard from "../../components/ActorCard";
import styles from "./styles";

export default function MovieDetails({ route }) {
    const { movie } = route.params;
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>{movie.nome}</Text>
                <Text style={styles.sinopse}>{movie.sinopse}</Text>
                <Text style={styles.subtitle}>Elenco</Text>
                <FlatList
                    style={{ flex: 1 }}
                    data={movie.elenco}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ActorCard
                            actor={item}
                        />
                    )}
                />
            </View>
        </ScrollView>
    )
}
