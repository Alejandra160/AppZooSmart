import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ModalComponent from './ModalComponent';
import { useNavigation } from '@react-navigation/native';
import { Questrial_400Regular, useFonts } from '@expo-google-fonts/questrial';


const LoginPage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  
  let [fontsLoaded] = useFonts({
    Questrial_400Regular
  });

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount'); // Asegúrate de que el nombre coincida con el definido en el navegador
  };

  return (
    <ImageBackground
      source={require('../Images/index.png')}
      style={styles.background}
    >
      <View style={styles.overlay} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.loginButton} onPress={openModal}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('../Images/logoH.png')} style={styles.logo} />
        </View>

        <Text style={styles.textRegular}>WHERE TECHNOLOGY PROTECTS WILDLIFE</Text>

        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </ScrollView>

      <ModalComponent visible={modalVisible} onClose={closeModal} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20,
    position: 'absolute',
    top: 50,
  },
  textRegular: {
    fontFamily: 'Questrial',
    fontSize: 35,
    color:'white'
  },
  loginButton: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 30,
    paddingHorizontal: 30,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 280,
    resizeMode: 'contain',
    height: 100,
  },
  title: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '100',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ffcf27',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 60,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginPage;
