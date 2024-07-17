import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeEScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={[styles.container, { minHeight: windowHeight }]}>
      <View style={styles.bannerContainer}>
        <Image source={require('../Images/FondoWelcomeE.png')} style={styles.bannerImage} />
        <Image source={require('../Images/logoH.png')} style={styles.LogoImage} />
        <Text style={styles.welcomeText}>WELCOME EMPLOYEE</Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('ProfilEmployee')}>
          <Text style={styles.profileText}>PROFILE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>LEON</Text>
          <Text style={styles.cardDescription}>Description</Text>
          <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('EmployeeZone')}>
            <Text style={styles.moreButtonText}>MORE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>LEON</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('EmployeeZone')}>
            <Text style={styles.moreButtonText}>MORE</Text>
          </TouchableOpacity>
        </View>
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
    top: '50%',
    left: '50%',
    transform: [{ translateX: -105 }, { translateY: -10 }],
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'BreeSerif',
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
});

export default WelcomeEScreen;
