import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { getAnimalByNumericId, updateAnimalInfo } from '../services/Api'; // Asegúrate de que las rutas son correctas
import { UserContext } from '../context/UserContext';

type EmployeeZoneScreenRouteProp = RouteProp<{ params: { id: string } }, 'params'>;

const EmployeeZoneScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<EmployeeZoneScreenRouteProp>();
  const { id } = route.params;

  const [animal, setAnimal] = useState<any>(null);
  const [diet, setDiet] = useState('');
  const [additionalData, setAdditionalData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const animalData = await getAnimalByNumericId(id);
        setAnimal(animalData);
        setDiet(animalData.dieta);
        setAdditionalData(animalData.info_adicional);
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

  const handleSaveInfo = async () => {
    try {
      console.log('Updating animal with ID:', id); // Debugging line
      await updateAnimalInfo(id, { dieta: diet, info_adicional: additionalData });
      alert('Información actualizada correctamente');
    } catch (error) {
      console.error('Error updating animal info:', error);
      alert('Error al actualizar la información');
    }
  };

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
      <ImageBackground source={require('../Images/FondoMoreE.png')} style={styles.background}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>BACK</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{animal.nombre}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Age: {animal.edad?.años} years, {animal.edad?.meses} months, {animal.edad?.dias} days</Text>
          <Text style={styles.detailText}>Birthdate: {new Date(animal.fecha_nacimiento).toLocaleDateString()}</Text>
          <Text style={styles.detailText}>ArriveDate: {new Date(animal.fecha_arrivo).toLocaleDateString()}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.animalName}>{animal.nombre}</Text>
          <Text style={styles.infoText}>{animal.descripcion}</Text>
          
          <Text style={styles.sectionTitle}>Diet</Text>
          <TextInput
            style={styles.input}
            value={diet}
            onChangeText={setDiet}
            multiline
          />

          <Text style={styles.sectionTitle}>Additional data</Text>
          <TextInput
            style={styles.input}
            value={additionalData}
            onChangeText={setAdditionalData}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.SaveInfoButton} onPress={handleSaveInfo}>
          <Text style={styles.SaveInfoButtonText}>SAVE NEW INFO</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '15%',
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
    marginTop: '15%',
  },
  scrollViewContent: {
    paddingBottom: 20,  // Espacio adicional para la parte inferior del ScrollView
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: '10%',
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
    marginTop: 60,
    width: '90%',
  },
  animalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  SaveInfoButton: {
    backgroundColor: '#f39219',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 50,
    width: '50%',
  },
  SaveInfoButtonText: {
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

export default EmployeeZoneScreen;
