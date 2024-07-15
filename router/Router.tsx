// router/Router.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
import CreateAccountScreen from '../pages/HomePage';
import WelcomeScreen from '../pages/Welcome';
import PerfilScreen from '../pages/Perfil';
import CreateEmployeeScreen from '../pages/CreateEmployee';
import ReptilisScreen from '../pages/Reptilis';
import AquaticScreen from '../pages/Aquatic';
import LandScreen from '../pages/Land';



const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}initialRouteName="Welcome">
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />

        
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen}/>
        <Stack.Screen name="Employees" component={CreateEmployeeScreen}/>
        <Stack.Screen name="Reptilis" component={ReptilisScreen}/>
        <Stack.Screen name="Aquatic" component={AquaticScreen}/>
        <Stack.Screen name="Land" component={LandScreen}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
