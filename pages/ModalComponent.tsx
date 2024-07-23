import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  useFonts, Karla_800ExtraBold } from '@expo-google-fonts/karla';

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ visible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, si es necesario
    navigation.navigate('Welcome');
    onClose();
  };
  let [fontsLoaded] = useFonts({

    Karla_800ExtraBold
  });
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <TouchableOpacity style={styles.modal} activeOpacity={1}>
          <View style={styles.modalContent}>
            <Text style={styles.textRegularButtons2}>Login</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ccc"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
            />

            <TouchableOpacity  style={styles.closeButton}>
              <Text style={styles.textRegularButtons2}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#ccc',
    borderWidth: 4,
    borderRadius: 60,
    padding: 20,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  textRegularButtons2: {
    fontFamily: 'Karla_800ExtraBold',
    fontSize: 15,
    color:'white'
  },
  modalContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalText: {
    color: '#FFF',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#19B8BF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalComponent;
