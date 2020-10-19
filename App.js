/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import MainRoute from './src/routes/index'

const App = () => (
  <NavigationContainer>
    <MainRoute/>
  </NavigationContainer>
)

export default App;
