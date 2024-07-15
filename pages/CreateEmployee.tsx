import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, Dimensions, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CreateEmployeeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../Images/EmployeeAcountFondo.png')} style={styles.background}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>
      <Image source={require('../Images/LogoS.png')} style={styles.LogoImage} />
      <Text style={styles.TitleText}>CREATE EMPLOYEE</Text>
      <TextInput style={styles.input} placeholder="NAME" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="BIRTHDATE" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="EMAIL" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="PASSWORD" placeholderTextColor="#000" secureTextEntry={true} />
      <TouchableOpacity style={styles.assignButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.assignButtonText}>+ ASSIGN ZONE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.finishButton}>
        <Text style={styles.finishButtonText}>FINISH</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPressOut={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}> + ASSIGN ZONE</Text>
            <View style={styles.zoneContainer}>

    
      <TouchableOpacity style={[styles.zoneButton, styles.reptilis]}>
        <Text style={styles.zoneText}>REPTILIS</Text>
      </TouchableOpacity>

              
              <TouchableOpacity style={[styles.zoneButton, styles.aquatic]}>
                <Text style={styles.zoneText}>AQUATIC</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.zoneContainer}>
              <TouchableOpacity style={[styles.zoneButton, styles.land]}>
                <Text style={styles.zoneText}>LAND</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.zoneButton, styles.birds]}>
                <Text style={styles.zoneText}>BIRDS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  TitleText: {
    color: 'white',
    fontSize: 30,
    marginBottom: 60
  },
  LogoImage:{
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    color: '#000',
    marginTop: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  gradient:{
    borderRadius: 10,
    padding: 1, 
  },
  assignButton: {
    borderRadius: 20,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  assignButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  zoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  zoneButton: {
    width: '45%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  zoneText: {
    color: 'black',
    fontWeight: 'bold',
  },
  reptilis: {
    backgroundColor: '#125a00',
  },
  aquatic: {
    backgroundColor: '#19B8BF',
  },
  land: {
    backgroundColor: '#FF9800',
  },
  birds: {
    backgroundColor: '#FF4C4C',
  },
  finishButton:{
    backgroundColor: '#19b8bf',
    borderRadius: 20,
    padding: 15,
    width: '40%',
    alignItems: 'center',
    marginTop: 40,
  },
  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  arrowContainer:{
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
  }
});

export default CreateEmployeeScreen;
