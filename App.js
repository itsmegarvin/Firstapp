/* install npm package (eg webview package) in React-Native */
import React from "react";
import {WebView } from "react-native-webview";

const App = () => {
  return (
    <WebView source={{uri:"https://reactnative.dev/"}} />
  );
};



export default App;


/*
first goto terminal and install package then use that package 
here  we have installed webview package with the Command
     npm install react-native-webview

*/
