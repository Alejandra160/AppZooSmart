import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PerfilEScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../Images/FondoProfilEmployee.png')} style={styles.background}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>
      <Image source={require('../Images/LogoS.png')} style={styles.LogoImage} />
      <Text style={styles.TitleText}>PROFILE</Text>
      <TextInput style={styles.input} placeholder="NOMBRE" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="NOMBRE ZOO" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="CORREO" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="DIRECCION (Calle, nm)" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="CONTRASEÑA" placeholderTextColor="#000" secureTextEntry={true} />
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>UPDATE ACCOUNT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>DELETED ACCOUNT</Text>
      </TouchableOpacity>
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
  LogoImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
  },
  TitleText: {
    marginBottom: 40,
    color: 'white',
    fontSize: 30,
  },
  arrowContainer: {
    position: 'absolute',
    top: 40,
    left: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    width: 30,
    height: 20,
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  deleteButton: {
    backgroundColor: '#eb4103',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: '#84ae1b',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default PerfilEScreen;
