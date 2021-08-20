import i18n from './i18n' // <- Don't forget to load it first
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Home from './src/screens/Home'

/*
This is where everything starts.
The App component is the place where you will add the most abstracted components.
Which means you will call the screens of your app and configure just basic things here.
No content should be added here.
*/

/*
With a syntax similar to CSS, React Native allows you to customize the appearance
of the components by using a StyleSheet with properties that remember CSS
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: getStatusBarHeight() // <- Adjusts the screen padding to not exceed status bar limits
  },
})

/**
 * Main component of the application
 * Contains a safe area view, the screen and a status bar configurator
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container} testID="app-container" >
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  )
}
