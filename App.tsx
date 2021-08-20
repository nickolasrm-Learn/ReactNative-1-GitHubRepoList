import i18n from './i18n'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Home from './src/screens/Home'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: getStatusBarHeight()
  },
})

export default function App() {
  return (
    <SafeAreaView style={styles.container} testID="app-container" >
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  )
}
