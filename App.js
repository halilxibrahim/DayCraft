import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button, Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('/Users/halil/Desktop/DayCraft/assets/home.png')}
          style={styles.image}
        />
        <Text style={styles.title}> DAY CRAFT </Text>
        <Text style={styles.text}>Day Management & To-Do</Text>
        <Text style={styles.paragraph}>This powerful tool is crafted to elevate your task management experience by organizing your tasks seamlessly, project by project. Welcome to a more streamlined approach to tackling your to-dos!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Start"
            onPress={() => Alert.alert('ok status')}
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Cochin',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#aab0f0',
  },
  text: {
    padding: 40,
    color: '#24252C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  paragraph: {
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#6E6A7C',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 10, // Yuvarlak kenarlıklar için borderRadius ayarı
    backgroundColor: '#6691ed', // Mavi arka plan rengi
    paddingHorizontal:20, // Butonun yatay padding'i
  },
});
