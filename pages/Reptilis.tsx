// ReptilisScreen.tsx
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, BreeSerif_400Regular } from '@expo-google-fonts/bree-serif';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import { getAnimalsByZone } from '../services/Api';
import { UserContext } from '../context/UserContext';

const ReptilisScreen: React.FC = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useContext(UserContext) must be used within a UserProvider');
  }

  const { user } = context;

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const animalsData = await getAnimalsByZone('Reptilis');
        setAnimals(animalsData);
      } catch (error) {
        console.error('Error fetching animals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  let [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
    Questrial_400Regular,
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require('../Images/ReptilisFondo.png')} style={styles.background}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>
      <Image source={require('../Images/LogoS.png')} style={styles.logoImage} />
      <Text style={styles.titleText}>REPTILIS ZONE</Text>
      <Text style={styles.subText}>SPECIES</Text>

      <ScrollView contentContainerStyle={styles.speciesContainer}>
        {animals.map((animal) => (
          <View key={animal.id} style={styles.speciesBox}>
            <Text style={styles.speciesName}>{animal.nombre}</Text>
            <Text style={styles.speciesDescription}>{animal.descripcion}</Text>
            <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('ReptilisZone', { id: animal.id })}>
              <Text style={styles.moreButtonText}>MORE</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  titleText: {
    fontSize: 35,
    top: 50,
    color: 'white',
    position: 'absolute',
    fontFamily: 'BreeSerif_400Regular',
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
  logoImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
  },
  subText: {
    fontSize: 30,
    marginTop: 110,
    color: 'white',
    fontFamily: 'BreeSerif_400Regular',
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
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'BreeSerif_400Regular',
    color: '#fff',
  },
  speciesDescription: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    width: 300,
    fontFamily: 'Questrial_400Regular',
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
    fontFamily: 'BreeSerif_400Regular',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontFamily: 'BreeSerif_400Regular',
  },
});

export default ReptilisScreen;
