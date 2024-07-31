import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Welcome from "../pages/Welcome";
import PerfilScreen from "../pages/Perfil";
import ReptilisScreen from "../pages/Reptilis";
import AquaticScreen from "../pages/Aquatic";
import LandScreen from "../pages/Land";




const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="Home" component={HomePage}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="Perfil" component={PerfilScreen}/>
      <Stack.Screen name="Reptilis" component={ReptilisScreen}/>
      <Stack.Screen name="Aquatic" component={AquaticScreen}/>
      <Stack.Screen name="Land" component={LandScreen}/>

      
       
    
       
     
     
      
      
      
       
      
     
      

      

     </Stack.Navigator>
  );
}





export default AuthStack;
