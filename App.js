// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/mainScreen';
import PlaceOrder from './src/screens/PlaceOrder';
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={()=>navigation.navigate('Main')}>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;