import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './context/UserContext'; // USERINFO
import WelcomeScreen from './pages/Welcome';
import PerfilScreen from './pages/Perfil';
import CreateEmployeeScreen from './pages/CreateEmployee';
import ReptilisScreen from './pages/Reptilis';
import AquaticScreen from './pages/Aquatic';
import LandScreen from './pages/Land';
import BirdsScreen from './pages/Birds';
import LoginPage from './pages/LoginPage';
import AddSpeciesScreen from './pages/AddSpecie';
import ReptilisZoneScreen from './pages/MoreR';
import AquaticZoneScreen from './pages/MoreA';
import BirdsZoneScreen from './pages/MoreB';
import LandZoneScreen from './pages/MoreL';
import WelcomeEScreen from './pages/HomePageE';
import PerfilEScreen from './pages/ProfilEmployee';
import EmployeeZoneScreen from './pages/MoreEmployee';
import TestPage from './pages/TestPage'; 



const Stack = createStackNavigator();

const App = () => {
  return (
  <UserProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="CreateEmployee" component={CreateEmployeeScreen} />
        <Stack.Screen name="Reptilis" component={ReptilisScreen} />
        <Stack.Screen name="Aquatic" component={AquaticScreen} />
        <Stack.Screen name="Land" component={LandScreen} />
        <Stack.Screen name="Birds" component={BirdsScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="AddSpecie" component={AddSpeciesScreen} />
        <Stack.Screen name="ReptilisZone" component={ReptilisZoneScreen} />
        <Stack.Screen name="AquaticZone" component={AquaticZoneScreen} />
        <Stack.Screen name="BirdsZone" component={BirdsZoneScreen} />
        <Stack.Screen name="LandZone" component={LandZoneScreen} />
        <Stack.Screen name="WelcomeEmployee" component={WelcomeEScreen} />
        <Stack.Screen name="ProfilEmployee" component={PerfilEScreen} />
        <Stack.Screen name="EmployeeZone" component={EmployeeZoneScreen} />
        <Stack.Screen name="Test" component={TestPage} /> 




      </Stack.Navigator>
    </NavigationContainer>
  </UserProvider>
  );
};

export default App;
