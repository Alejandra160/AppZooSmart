import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, BreeSerif_400Regular } from '@expo-google-fonts/bree-serif';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import { getAnimalsByZoneEMP } from '../services/Api';  // Asegúrate de que la ruta es correcta
import { UserContext } from '../context/UserContext';

const WelcomeEScreen = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext); // Agrega setUser para poder limpiar los datos del usuario
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const animalsData = await getAnimalsByZoneEMP(user?.zone || ''); // Pasar la zona del usuario
        setAnimals(animalsData);
      } catch (error) {
        console.error('Error fetching animals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, [user?.zone]);

  const handleLogout = () => {
    setUser(null); // Limpiar los datos del usuario del contexto
    navigation.navigate('Login'); // Redirigir a la pantalla de inicio de sesión
  };

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
    <ScrollView contentContainerStyle={[styles.container, { minHeight: windowHeight }]}>
      <View style={styles.bannerContainer}>
        <Image source={require('../Images/FondoWelcomeE.png')} style={styles.bannerImage} />
        <Image source={require('../Images/logoH.png')} style={styles.LogoImage} />
        <Text style={styles.welcomeText}>WELCOME {user?.name.toUpperCase()}</Text>
        <Text style={styles.zoneText}>ZONE: {user?.zone.toUpperCase()}</Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton} onPress={handleLogout}>
          <Text style={styles.profileText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {animals.map((animal) => (
          <View key={animal.id} style={styles.card}>
            <Text style={styles.cardTitle}>{animal.nombre}</Text>
            <Text style={styles.cardDescription}>{animal.descripcion}</Text>
            <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('EmployeeZone', { id: animal.id })}>
              <Text style={styles.moreButtonText}>MORE</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingBottom: 20,
  },
  bannerContainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 300,
  },
  welcomeText: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -105 }, { translateY: -10 }],
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'BreeSerif_400Regular',
  },
  zoneText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -10 }],
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Questrial_400Regular',
  },
  header: {
    position: 'absolute',
    top: 35,
    right: 20,
    zIndex: 1,
  },
  LogoImage: {
    position: 'absolute',
    top: 40,
    right: 300,
    width: 115,
    height: 40,
  },
  profileButton: {
    backgroundColor: '#ce41ff',
    padding: 10,
    borderRadius: 5,
  },
  profileText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  contentContainer: {
    width: '90%',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 3,
    padding: 30,
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  cardDescription: {
    fontSize: 14,
    color: '#000000',
    marginVertical: 10,
  },
  moreButton: {
    backgroundColor: '#19B8BF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  moreButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
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

export default WelcomeEScreen;
