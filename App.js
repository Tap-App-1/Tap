import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpPage from './app/screens/SignUpPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: 'LoginScreen'}} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{title: 'Welcome Screen'}} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{title: 'SignUpPage '}} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
