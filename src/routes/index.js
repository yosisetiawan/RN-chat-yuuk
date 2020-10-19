import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './../screen/Home'
import Splash from './../screen/Splash'
import MainChat from  './../screen/MainChat'

const Stack = createStackNavigator()

const MainStack = () => (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="Chat" component={MainChat}></Stack.Screen>
    </Stack.Navigator>
)

export default MainStack;