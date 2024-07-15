import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddSpeciesScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [diet, setDiet] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [age, setAge] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigation = useNavigation();

  const handleCreate = () => {
    // Aquí puedes agregar la lógica para manejar la creación de la especie
    console.log({
      name,
      description,
      diet,
      birthdate,
      arrivalDate,
      age,
      additionalInfo,
    });
  };

  return (
    <ImageBackground source={require('../Images/AddSpecie.png')} style={styles.background}>

      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>

      <Image source={require('../Images/LogoS.png')} style={styles.LogoImage} />

      <View style={styles.container}>
        <Text style={styles.title}>ADD SPECIE</Text>
        <View style={styles.titleLine} />
        
        <TextInput
          style={styles.input}
          placeholder="NAME"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.inputLarge]}
          placeholder="DESCRIPTION"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="DIET"
          value={diet}
          onChangeText={setDiet}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.inputSmall]}
            placeholder="BIRTHDATE"
            value={birthdate}
            onChangeText={setBirthdate}
          />
          <TextInput
            style={[styles.input, styles.inputSmall]}
            placeholder="ARRIVAL DATE"
            value={arrivalDate}
            onChangeText={setArrivalDate}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.inputSmall]}
            placeholder="AGE"
            value={age}
            onChangeText={setAge}
          />
          <TextInput
            style={[styles.input, styles.inputSmall]}
            placeholder="ADDITIONAL INFO"
            value={additionalInfo}
            onChangeText={setAdditionalInfo}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  LogoImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
 
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
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
  titleLine: {
    height: 2,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 40,
    padding: 10,
    marginVertical: 5,
    textAlign:'center',
    fontSize: 16,
  },
  inputLarge: {
    height: 50,
  },
  inputSmall: {
    flex: 1,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#19b8bf',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddSpeciesScreen;
