import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../pages/Auth';
import Statut from '../pages/Statut';
import Search from '../pages/Search';
import { Colors } from '../components/styles';
import { borderColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import MainDashboardEntry from '../components/MainDashboardEntry'

const Stack = createNativeStackNavigator();
const {primary, tertiary} = Colors;

const RootStack = () =>{
    return(
        <NavigationContainer>
            
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName='Auth'
            >
               <Stack.Screen name='Auth' component={Auth}/>
               <Stack.Screen name='Statut' component={Statut} />
               <Stack.Screen name='Search' component={Search} options={{headerTintColor: '#00f'}} />
            </Stack.Navigator>
        </NavigationContainer>
   );
};

export default RootStack;