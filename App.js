import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button, 
  TextInput
} from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import FlashScreen from './components/flashScreen';

const App = () => {
  return (
    <FlashScreen/>
  );
};


export default App;
