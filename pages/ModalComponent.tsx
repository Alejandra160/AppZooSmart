import React, { useState, useContext } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Karla_800ExtraBold } from '@expo-google-fonts/karla';
import { loginAdmin, loginEmployee } from '../services/Api';
import { UserContext } from '../context/UserContext'; // Importa el contexto del usuario

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ visible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext); // Obtén el setUser del contexto

  const handleLogin = async () => {
    setError('');
    try {
      const adminResponse = await loginAdmin({ email, password, isMobileApp: true });
      if (adminResponse.user) {
        setUser(adminResponse.user); // Guarda la información del admin en el contexto
        navigation.navigate('Welcome');
        onClose();
        return;
      }
    } catch (err) {
      console.log('No es admin, intentando como empleado');
    }

    try {
      const employeeResponse = await loginEmployee({ email, password, isMobileApp: true });
      if (employeeResponse.user) {
        setUser(employeeResponse.user); // Guarda la información del empleado en el contexto
        navigation.navigate('WelcomeEmployee');
        onClose();
        return;
      }
    } catch (err) {
      setError('Correo o contraseña incorrectos');
    }
  };

  let [fontsLoaded] = useFonts({
    Karla_800ExtraBold,
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

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

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

            <TouchableOpacity onPress={handleLogin} style={styles.closeButton}>
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
    color: 'white',
  },
  modalContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
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
