import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BirdsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (

    <ImageBackground source={require('../Images/BirdsFondo.png')} style={styles.background}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>
      <Image source={require('../Images/LogoS.png')} style={styles.LogoImage} />
      <Text style={styles.TitleText}>REPTILIS ZONE</Text>
      <TouchableOpacity style={styles.addButton}onPress={() => navigation.navigate('AddSpecie')}>
        <Text style={styles.addButtonText}>+ ADD SPECIES</Text>
      </TouchableOpacity>
      <Text style={styles.SubText}>SPECIES</Text>
      <ScrollView contentContainerStyle={styles.speciesContainer}>
        <View style={styles.speciesBox}>
          <Text style={styles.speciesName}>LEON</Text>
          <Text style={styles.speciesDescription}>Descripcion</Text>
          <TouchableOpacity style={styles.moreButton}onPress={() => navigation.navigate('BirdsZone')}>
            <Text style={styles.moreButtonText}>MORE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.speciesBox}>
          <Text style={styles.speciesName}>LEON</Text>
          <Text style={styles.speciesDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.moreButton}onPress={() => navigation.navigate('BirdsZone')}>
            <Text style={styles.moreButtonText}>MORE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TitleText: {
    fontSize: 25,
    top: 90,
    color: 'white',
    position: 'absolute'
  },
  addButton: {
    width: '50%',
    padding: 20,
    borderRadius: 40,
    marginTop: 200,
    alignItems: 'center',
    backgroundColor: '#ffcf27',
    zIndex: 1
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold'
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
  LogoImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
 
  },
  SubText: {
    fontSize: 30,
    marginTop: 50,
    color: 'white',
    alignSelf: 'center',
  },
  speciesContainer: {
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
  },
  speciesBox: {

    padding: 20,
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#fff',
    width: '100%',
    position: 'relative',
  },
  speciesName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  speciesDescription: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    width:300,
    marginBottom: 60, // Espacio para el botón
  },
  moreButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#19b8bf',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  moreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BirdsScreen;
