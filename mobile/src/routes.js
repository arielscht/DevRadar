import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#7D40E7'
                    },
                    headerTintColor: '#FFF',
                    headerTitleAlign: 'center',
                }}
            >
                <AppStack.Screen name="DevRadar" component={Main} options={{title: 'DevRadar'}}/>
                <AppStack.Screen name="Profile" component={Profile} options={{title: 'Perfil do Github'}}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

