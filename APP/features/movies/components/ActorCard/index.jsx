import { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const ActorCard = ({ actor = {} }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <View style={styles.container}>
            {!imageError && actor.imagem ? (
                <Image 
                    source={{ uri: actor.imagem }} 
                    style={styles.image}
                    onError={() => setImageError(true)}
                    resizeMode="cover"
                />
            ) : (
                <View style={[styles.image, { backgroundColor: "#ccc" }]} />
            )}
            <Text style={styles.name}>{actor.nome}</Text>
            <Text style={styles.character}>{actor.personagem}</Text>
        </View>
    );
};

export default ActorCard;