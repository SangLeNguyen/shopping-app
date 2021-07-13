import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/products';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
