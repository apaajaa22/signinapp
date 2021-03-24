import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Login, Register} from './pages';
import Router from './Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
