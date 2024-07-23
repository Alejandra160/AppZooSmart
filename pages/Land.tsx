import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, BreeSerif_400Regular } from '@expo-google-fonts/bree-serif';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';

const LandScreen = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Questrial_400Regular,
    BreeSerif_400Regular
  });

  return (
    <ImageBackground source={require('../Images/LandFondo.png')} style={styles.background}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>
      <Image source={require('../Images/LogoS.png')} style={styles.LogoImage} />
      <Text style={styles.TitleText}>LAND ZONE</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddSpecie')}>
        <Text style={styles.addButtonText}>+ ADD SPECIES</Text>
      </TouchableOpacity>
      <Text style={styles.SubText}>SPECIES</Text>

      <ScrollView contentContainerStyle={styles.speciesContainer}>
        <View style={styles.speciesBox}>
          <Text style={styles.speciesName}>LEON</Text>
          <Text style={styles.speciesDescription}>Descripcion</Text>
          <TouchableOpacity style={styles.moreButton}onPress={() => navigation.navigate('LandZone')}>
            <Text style={styles.moreButtonText}>MORE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.speciesBox}>
          <Text style={styles.speciesName}>LEON</Text>
          <Text style={styles.speciesDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.moreButton}onPress={() => navigation.navigate('LandZone')}>
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
    fontSize: 50,
    top: 90,
    fontFamily:'BreeSerif_400Regular',
    color: 'white',
    position: 'absolute',
  },
  addButton: {
    width: '50%',
    padding: 20,
    borderRadius: 40,
    marginTop: 200,
    alignItems: 'center',
    backgroundColor: '#ffcf27',
    zIndex: 1,
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily:'BreeSerif_400Regular',
    fontSize:18
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
    fontSize: 35,
    marginTop: 50,
    color: 'white',
    fontFamily:'BreeSerif_400Regular',
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
    fontFamily:'BreeSerif_400Regular',
    fontWeight: 'bold',
    color: '#fff',
  },
  speciesDescription: {
    fontSize: 16,
    color: 'black',
    fontFamily:'Questrial_400Regular',
    marginTop: 10,
    width: 300,
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
    fontFamily:'BreeSerif_400Regular',
    fontWeight: 'bold',
  },
});

export default LandScreen;
