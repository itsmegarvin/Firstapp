import React from "react";
import { Text, View, Button } from "react-native";
import VendorDetails from "./components/VendorDetails";

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 40}}>hello component</Text>
      <UserData />
      <CompanyData/>
      <VendorDetails/>
    </View>
  );
};

//component1
function UserData() {
  return (
    <View>
      <Text style={{fontsize:30}}>Name:garvin poe</Text>
      <Text>age: 22 </Text>
      <Text>Email:"garvinpoe@gmail.com"</Text>
    </View>
  );
}

//component2
const CompanyData=()=>{
  return (
    <View>
      <Text style={{fontsize:30}}>Name:AutoRobo</Text>
      <Text>Location:Frankfurt, Germany</Text>
      <Text>Email:Atro@pvt.ltd.com</Text>
    </View>
  );
}

//for 100's of components it will be tedious so we will make separate folder as component 

export default App;
