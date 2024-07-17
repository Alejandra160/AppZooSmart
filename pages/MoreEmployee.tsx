import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmployeeZoneScreen = () => {
  const navigation = useNavigation();

  return (
    
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
    <ImageBackground source={require('../Images/FondoMoreE.png')} style={styles.background}>
    
    
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        
      
        <Text style={styles.backButtonText}>BACK</Text>
        
      </TouchableOpacity>
      
      <Text style={styles.title}>LEON</Text>
      
      
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Age: --- Birthdate: ---- ArriveDate: -----</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.animalName}>LEON</Text>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          
          <Text style={styles.sectionTitle}>Diet</Text>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          
          <Text style={styles.sectionTitle}>Additional data</Text>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
      </View>
        
        <TouchableOpacity style={styles.SaveInfoButton}>
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
    marginBottom:60
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
    marginTop: 30,
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
    padding: 50,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default EmployeeZoneScreen;
