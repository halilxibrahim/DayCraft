import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button, Alert } from 'react-native';
import React from 'react'


export default function HomeScreen({ navigation }) {
  return (
          <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                source={require('/Users/halil/Desktop/DayCraft/assets/home.png')}
                style={styles.image}
                />
              </View>

              <View style={styles.topContainer}>
                <Text style={styles.title}> DAY CRAFT </Text>
                <Text style={styles.text}>Day Management & To-Do</Text>
                <Text style={styles.paragraph}>This powerful tool is crafted to elevate your task management experience by organizing your tasks seamlessly, project by project. Welcome to a more streamlined approach to tackling your to-dos!</Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                    title="Start"
                    onPress={() => navigation.navigate('Todo')}                    color="#fff"
                />
              </View>
           
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  topContainer: {
    flex:1,
    top:0,
    left:10,
    right:10,
  },
  title: {
    fontFamily: 'Cochin',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#aab0f0',
    left:25,
  },
  text: {
    padding: 40,
    color: '#24252C',
    fontWeight: 'bold',
    fontSize: 20,
    left:25,
    top:0,
  },
  paragraph: {
    padding: 0,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#6E6A7C',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    bottom:80,
    borderRadius:5, // Yuvarlak kenarlıklar için borderRadius ayarı
    paddingRight:40,
    paddingLeft:40,
    backgroundColor: '#6691ed', // Mavi arka plan rengi
    paddingHorizontal:20, // Butonun yatay padding'i
  },
});
