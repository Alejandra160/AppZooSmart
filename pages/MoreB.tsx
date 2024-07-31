import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { getAnimalByNumericId } from '../services/Api';  // Asegúrate de que la ruta es correcta

type BirdsZoneScreenRouteProp = RouteProp<{ params: { id: string } }, 'params'>;

const BirdsZoneScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<BirdsZoneScreenRouteProp>();
  const { id } = route.params;

  const [animal, setAnimal] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        console.log(`Fetching animal with ID: ${id}`);  // Depuración
        const animalData = await getAnimalByNumericId(id);
        console.log('Animal Data:', animalData);  // Depuración
        setAnimal(animalData);
        setError(null);
      } catch (error) {
        console.error('Error fetching animal:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!animal) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Animal no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ImageBackground source={require('../Images/BirdsFondo.png')} style={styles.background}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>BACK</Text>
        </TouchableOpacity>
        <Text style={styles.title}>BIRDS ZONE</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Age: {animal.edad?.años} years, {animal.edad?.meses} months, {animal.edad?.dias} days</Text>
          <Text style={styles.detailText}>Birthdate: {new Date(animal.fecha_nacimiento).toLocaleDateString()}</Text>
          <Text style={styles.detailText}>ArriveDate: {new Date(animal.fecha_arrivo).toLocaleDateString()}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.animalName}>{animal.nombre}</Text>
          <Text style={styles.infoText}>{animal.descripcion}</Text>
          
          <Text style={styles.sectionTitle}>Diet</Text>
          <Text style={styles.infoText}>{animal.dieta}</Text>
          
          <Text style={styles.sectionTitle}>Additional data</Text>
          <Text style={styles.infoText}>{animal.info_adicional}</Text>
          
          {animal.deleted && <Text style={styles.deletedText}>DELETED</Text>}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: 1000,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  LogoImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#19b8bf',
    padding: 10,
    borderRadius: 20,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: '10%',
  },
  scrollViewContent: {
    paddingBottom: 20,  // Espacio adicional para la parte inferior del ScrollView
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 16,
    color: 'black',
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
  },
  animalName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    marginTop: 10,
  },
  chartTitleContainer: {
    backgroundColor: '#ffcf27',
    width: '100%',
    paddingVertical: 6,
    marginBottom: '5%',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  deletedText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
  chartContainer: {
    marginTop: '5%',
    alignItems: 'center',
    width: '90%',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  chart: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeHourButton: {
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
  },
  changeHourButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
  },
});

export default BirdsZoneScreen;
