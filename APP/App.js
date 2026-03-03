import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://humble-broccoli-4jvx7g4wqpxvfqv66-3000.app.github.dev/posts", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    fetch("https://humble-broccoli-4jvx7g4wqpxvfqv66-3000.app.github.dev/comments", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  return (
    <View style={styles.container}>
      <Text>Susuh e Kiiro são fodas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});