<p align="center">
  <img src="https://raw.githubusercontent.com/nickolasrm-Learn/ReactNative-1-GitHubRepoList/main/assets/icon.png" 
    alt="App logo" 
    width="200px"/>
</p>

<div align="center">
  <img src="https://github.com/nickolasrm-Learn/ReactNative-1-GitHubRepoList/actions/workflows/build.yml/badge.svg" />
  <a href='https://coveralls.io/github/nickolasrm-Learn/ReactNative-1-GitHubRepoList?branch=main'><img src='https://coveralls.io/repos/github/nickolasrm-Learn/ReactNative-1-GitHubRepoList/badge.svg?branch=main'     alt='Coverage Status' /></a>
</div>

## Introduction
GitHubRepoList is the first application I made using React Native. It is a simple app that fetches repositories given a username, and displays them in a list. Otherwise it shows you a not found modal.

## GIF
<img src="https://raw.githubusercontent.com/nickolasrm-Learn/ReactNative-1-GitHubRepoList/main/screenshots/overview.png" 
  alt="An animation of the app usage" 
  width="200px"/>

## What is React Native?
React Native is a mobile development framework made by Facebook. It allows you to write React code using JavaScript and to compile it to native Android and iOS code. This can drastically improve performance when compared to webview ports like [Phonegap](https://en.wikipedia.org/wiki/Apache_Cordova) and [AppsGeyser](https://appsgeyser.com/).

## How to use it
1. Make sure you have Node and npm installed. If not, download them [here](https://nodejs.org/en/)
2. Clone this repository into any folder in your computer
3. Open a terminal window in the repository root folder and run `npm install` and then `npm start`
4. A browser window should opened in your computer. Check if it happened
5. Download Expo Go into [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [App Store](https://apps.apple.com/app/apple-store/id982107779)
6. Follow the in app instructions and read the qr code displayed into the previously opened Expo tab bottom-left corner with the Expo app 
7. Wait for the app to be loaded
8. Enjoy

## I want to learn how to make it
All important files are commented and documented. Check these files out in the following order:

1. `App.tsx`
2. `src/screens/Home/index.tsx`
3. `i18n/index.ts`
4. `src/adapters/Github.ts`
5. `src/template/HomeTemplate/index.tsx`
6. `src/components/Input/index.tsx`
7. `src/other/Style.tsx`
8. `src/components/ListItem/index.tsx`
9. `src/components/List/index.tsx`
10. `src/components/ErrorModal/index.tsx`
11. `__tests__/App.test.tsx`

> Remember, this is not a React and neither a CSS or Typescript tutorial, this is a project made using React Native where I explain the important steps I followed to learn this tool.

## Technologies used
* [React Native](https://reactnative.dev/)
* [Jest](https://jestjs.io/pt-BR/)
* [Testing Library](https://testing-library.com/)
* [Axios](https://axios-http.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Expo](https://expo.dev/)
* [i18n](https://react.i18next.com/)