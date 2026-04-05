import { Text, View, Image } from "react-native";
import styles from "./styles";

const ActorCard = ({ actor = {} }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: actor.imagem }} style={styles.image} />
            <Text style={styles.name}>{actor.nome}</Text>
            <Text style={styles.character}>{actor.personagem}</Text>
        </View>
    );
};

export default ActorCard;