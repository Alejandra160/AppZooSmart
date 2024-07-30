import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, BreeSerif_400Regular } from '@expo-google-fonts/bree-serif';
import { sendDataToESP32 } from '../services/Api'; // RUTA API

const AquaSScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    BreeSerif_400Regular
  });

  const [waterLevel, setWaterLevel] = useState('');
  const [lowTemp, setLowTemp] = useState('');
  const [normalTemp, setNormalTemp] = useState('');
  const [highTemp, setHighTemp] = useState('');
  const [feedingTime, setFeedingTime] = useState('');

  const handleSendData = async () => {
    const data = {
      waterLevel,
      lowTemp,
      normalTemp,
      highTemp,
      feedingTime,
    };

    try {
      await sendDataToESP32(data);
      Alert.alert('Success', 'Data sent successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to send data. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('../Images/ProfileBackground.png')} style={styles.background}>
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../Images/arrowButton.png')} style={styles.arrowImage} />
      </TouchableOpacity>

      <Text style={styles.textRegular}>AquaSmart</Text>

      <TextInput
        style={styles.input}
        placeholder="Water Level"
        placeholderTextColor="#000"
        value={waterLevel}
        onChangeText={setWaterLevel}
      />
      <TextInput
        style={styles.input}
        placeholder="Low temperature (C°)"
        placeholderTextColor="#000"
        value={lowTemp}
        onChangeText={setLowTemp}
      />
      <TextInput
        style={styles.input}
        placeholder="Normal temperature (C°)"
        placeholderTextColor="#000"
        value={normalTemp}
        onChangeText={setNormalTemp}
      />
      <TextInput
        style={styles.input}
        placeholder="High temperature (C°)"
        placeholderTextColor="#000"
        value={highTemp}
        onChangeText={setHighTemp}
      />
      <TextInput
        style={styles.input}
        placeholder="Feeding Time"
        placeholderTextColor="#000"
        value={feedingTime}
        onChangeText={setFeedingTime}
      />

      <TouchableOpacity style={styles.deleteButton} onPress={handleSendData}>
        <Text style={styles.textRegularButton}>Send</Text>
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
  LogoImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 150,
  },
  textRegular: {
    fontFamily: 'BreeSerif_400Regular',
    fontSize: 35,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
  textRegularButton: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'BreeSerif_400Regular',
    fontSize: 20,
  },
});

export default AquaSScreen;
