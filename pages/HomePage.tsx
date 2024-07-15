import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zooName, setZooName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  


  const handleCreateAccount = () => {
    // Lógica para crear una cuenta
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Zoo Name:', zooName);
    console.log('Country:', country);
    console.log('State:', state);
    console.log('City:', city);
    console.log('Address:', address);
  };

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>

  

      <View style={styles.backgroundImageContainer}>
        <Image
          source={require('../Images/fondo.png')}
          style={styles.backgroundImage}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CREATE ACCOUNT</Text>
          <View style={styles.headerLine} />
        </View>

        <Text style={styles.formTitle}>ADMIN INFO</Text>
        <TextInput
          style={styles.input}
          placeholder="NAME"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.formTitle}>ZOO INFO</Text>
        <TextInput
          style={styles.input}
          placeholder="NOMBRE ZOO"
          value={zooName}
          onChangeText={setZooName}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="PAIS"
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="ESTADO"
            value={state}
            onChangeText={setState}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="CIUDAD"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="DIRECCION (Calle, nm)"
          value={address}
          onChangeText={setAddress}
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>CREATE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleGoBack}>
            <Text style={styles.buttonText}>BACK TO HOME</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'orange', // Ajusta el fondo si es necesario
  },
  backgroundImageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%', // Asegúrate de que cubra toda la pantalla
    zIndex: -1,
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
  backgroundImage: {
    width: '100%',
    height: '100%', // Asegúrate de que cubra toda la pantalla
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10, // Ajusta el padding si es necesario
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontWeight: '100',
    fontSize: 35,
    color: 'white',
    marginTop:50
  },
  headerLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '90%',
    marginTop: 10,
  },
  formTitle: {
    fontWeight: '100',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '90%', // Ajustado para que sea más ancho
    height: 50,
    textAlign: 'center',
    padding: 10,
    borderRadius: 25,
    borderColor: '#d3d3d3',
    borderWidth: 1.5,
    marginBottom: 15,
    backgroundColor: '#FFF',
    fontSize: 20,
    opacity: 0.75,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', // Ajustado para que sea más ancho
  },
  halfInput: {
    width: '48%',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 50, // Added margin bottom for better spacing
  },
  button: {
    backgroundColor: '#19B8BF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CreateAccountScreen;
