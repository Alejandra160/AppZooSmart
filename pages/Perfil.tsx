import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, BreeSerif_400Regular } from '@expo-google-fonts/bree-serif';


const PerfilScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    
    BreeSerif_400Regular
  });

  return (
    
    <ImageBackground source={require('../Images/ProfileBackground.png')} style={styles.background}>

      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>
     

      
    <Text style={styles.textRegular}>PROFILE</Text>
    
    
        <TextInput style={styles.input} placeholder="NOMBRE" placeholderTextColor="#000" />
        <TextInput style={styles.input} placeholder="NOMBRE ZOO" placeholderTextColor="#000" />
        <TextInput style={styles.input} placeholder="EMAIL" placeholderTextColor="#000" />
        <TextInput style={styles.input} placeholder="DIRECCION (Calle, nm)" placeholderTextColor="#000" />
        <TextInput style={styles.input} placeholder="PASSWORD" placeholderTextColor="#000" secureTextEntry={true} />
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.textRegularButton}>UPDATE ACCOUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.textRegularButton}>DELETED ACCOUNT</Text>
        </TouchableOpacity>
        
      
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
  LogoImage:{
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
  },
  textRegular: {
    fontFamily: 'BreeSerif_400Regular',
    fontSize: 35,
    marginBottom:30,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
  },
  input: {
    width: '80%',
    backgroundColor: '#B3E5FC',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  deleteButton: {
    backgroundColor: '#eb4103',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },

  updateButton : {
    backgroundColor: '#84ae1b',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,

  },
  textRegularButton: {
    color: '#FFFFFF',
    fontWeight:'600',
    fontFamily:'BreeSerif_400Regular',
    fontSize:20
  },
  
});

export default PerfilScreen;
