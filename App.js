import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Interface from './src/components/Interface'

export default function App() {
  return (
    <View style={styles.container}>
      <Interface/>      
      
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


