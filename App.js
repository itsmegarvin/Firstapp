import React from "react";
import { Text, View, Button,TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:"samuel",
    }
  }

  updateName(val){
    this.setState({name:val})
  }
  
    render(){
    return(
      <View>
          <Text style={{fontSize:30, color:'blue'}}>state and props in class component</Text>
          <Text>{this.state.name}</Text>
          <TextInput
              placeholder="Enter your name"
              onChangeText={(text)=>this.updateName(text)}
          />
          <Student name={this.state.name} 
          />
      </View>

    );
  }

}

class Student extends React.Component {
  render(){
    // console.warn(this.props)
    return(
      <Text style={{fontSize:20, color:'green'}}>student name: {this.props.name}</Text>

    );
  }
  
}

export default App;

/*
>for state in class component we need constructor. 
>super keyword is used to call the costructor of the  parent class.



*/
