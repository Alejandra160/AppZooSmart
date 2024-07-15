import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReptilisZoneScreen = () => {
  const navigation = useNavigation();

  return (
    
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
    <ImageBackground source={require('../Images/ReptilisFondo.png')} style={styles.background}>
    
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      
        <Text style={styles.backButtonText}>BACK</Text>
        
      </TouchableOpacity>
      <Text style={styles.title}>REPTILIS ZONE</Text>
      
      
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
          
          <Text style={styles.deletedText}>DELETED</Text>
        </View>
        
        <View style={styles.employeeContainer}>
          <Text style={styles.employeeTitle}>EMPLOYEE</Text>
          {['VALERIA', 'FERNANDA', 'ALEJANDRA', 'JAVIER'].map((employee, index) => (
            <View key={index} style={styles.employeeRow}>
              <Text style={styles.employeeName}>{employee}</Text>
              <TouchableOpacity>
                <Text style={styles.deleteIcon}>🗑️</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        
        <View style={styles.chartContainer}>
          <View style={styles.chartTitleContainer}>
            <Text style={styles.chartTitle}>DispenserFoodZoo</Text>
          </View>
          {/* Aquí puedes agregar tu componente de gráfica */}
          <View style={styles.chart}>
            <Text>Chart goes here</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.changeHourButton}>
          <Text style={styles.changeHourButtonText}>CHANGE HOUR</Text>
        </TouchableOpacity>
 
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '12%',
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
  employeeContainer: {
    backgroundColor: '#c727ff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
  },
  employeeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  employeeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  employeeName: {
    fontSize: 16,
    color: 'black',
  },
  deleteIcon: {
    fontSize: 16,
    color: '#FFFFFF',
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
});

export default ReptilisZoneScreen;
