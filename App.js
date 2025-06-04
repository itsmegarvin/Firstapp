import React, { use, useEffect, useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, Alert , Modal} from "react-native";

function App() {
  const [data, setData] = useState("");
  const [showModal,setshowModal]=useState(false);
  const [selectedUser,setselectedUser]=useState(undefined);

  const getApiData = async () => {
    const url = "http://192.168.101.12:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  const deleteData= async(id)=>{
    const url="http://192.168.101.12:3000/users";
    let result = await fetch(`${url}/${id}`,{
      method:"delete"
    });
    result = await result.json();
    if(result){
      alert("user deleted");
      getApiData();
    }
  }

  const updateData= (data)=>{
    setshowModal(true);
    setselectedUser(data);
  }

  useEffect(() => {
    getApiData();
  }, []);
  
  return (
    <View style={styles.container}>

      <View style={styles.dataWrapper}>
              <View>
                <Text>NAME</Text>
              </View>
              <View>
                <Text>ID</Text>
              </View>
              <View>
                <Text>OPERATION</Text>
              </View>
            </View>

      {data.length
        ? data.map((item, index) => (
            <View  style={styles.dataWrapper}>
              <View style={{flex:1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex:1}}>
                <Text>{item.id}</Text>
              </View>
              <View style={{flex:1, marginRight:5}} >
                <Button title="delete" onPress={()=>deleteData(item.id)}></Button>
              </View>
              <View style={{flex:1}}>
                <Button title="update" onPress={()=>updateData(item)}></Button>
              </View>
            </View>
          ))
        : null}

        <Modal visible={showModal} transparent={true}>
          <Usermodal setshowModal={setshowModal} selectedUser={selectedUser}/>
        </Modal>


    </View>
  );
}


const Usermodal = (props)=>{

  const [name, setName]= useState(undefined);
  const [id, setId]= useState(undefined);

  useEffect (()=>{
    if(props.selectedUser){
      setName(props.selectedUser.name);
      setId(props.selectedUser.id);
    }
  },[props.selectedUser])

  return(
          <View style={styles.centeredView} >
            <View style={styles.modalView}>
              <TextInput style={styles.input} value={name}/>
              <TextInput style={styles.input} value={id}/>
              <Button title="close" onPress={()=>props.setshowModal(false)}/>
                <View style={{marginTop:5}}>
                  <Button title="update" />
                </View>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"skyblue",
    margin:10,
    padding:10,
    alignItems:"center"
  },
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  modalView:{
    backgroundColor:"#fff",
    padding:50,
    borderRadius:10,
    borderColor:"black",
    borderWidth:1,
    

  },
  input:{
    borderWidth:2,
    borderColor:"skyblue",
    height:40,
    width:200,
    marginBottom:5,

  }
});

export default App;
/*
1. first we learn to fetch and make use of api found in internet like      jsonplaceholder.
2. then make fake api/ domi api using json server because to test put,patch,delete we must use our own api we can't from the internet.
3. install json server using command 
        npm install -g json-server
            make folder inside project as api/db.json and again run,
        json server --watch db.json
            this runs api locally in local port.  like http:localhost//3000  paste this in browser to use

            Task	                Needs Browser?
        Running JSON Server	            ❌ No
        Making requests to it	          ❌ No
        Viewing response in browser	    ✅ Optional
        
        learn to use postman

4. now to make your api accessible to the devices running on the same network, use commands
        ipconfig
        json server --host 0.0.0.0 db.json
            --host 0.0.0.0 makes api accessible to all the devices connected in same network
        then goto browser and paste ip address and port like 192.168.108.1:3000


*/
