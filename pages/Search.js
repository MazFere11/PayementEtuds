import { StatusBar } from 'expo-status-bar';
import React , {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { panResponder  } from '../components/InactivityVerify.js'
import {Container,Header,Title,Content,Button,Icon, Right,
  Body,Left,Picker,Form,Footer, FooterTab, ListItem, Thumbnail, Item, Input} from 'native-base';

import axios from 'axios';
import { PanResponder } from 'react-native-web';

const Search = ({navigation, route}) => {
  const [students, setStudents] = useState([]);
  const [studentsFilt, setStudentsFilt] = useState([]);

  useEffect(() => {
     axios
     .get('https://cameroonit.net/studentchecker/api/Student/students' , 
           { headers: 
              {"Authorization" : `Bearer ${route.params.token}`} 
         })
     .then(res => {
       setStudents(res.data);
       setStudentsFilt(res.data);
      })
     .catch(err => console.log(err)) 
   }, []);
  
   const handleSearch = (text) =>{
       if(text){
         const newUsers = students.filter(item =>{
      
           const itemUser = (item.firstName || item.lastName || item.matriculeNr) ? item.firstName.toUpperCase() + " " + item.lastName.toUpperCase()+ " " + item.matriculeNr.toUpperCase()
                           : ''.toUpperCase();
          const textUser = text.toUpperCase();
          return itemUser.indexOf(textUser) > -1;
          })
          setStudentsFilt(newUsers);
       }else{
         setStudentsFilt(students);
       }
   } 

   return(
        <Container >
          <StatusBar style='dark'/>
          <Header searchBar rounded style={styles.header}>    
              <Item style={styles.itemSearch}>
                 <Icon name='search'/>
                 <Input placeholder='nom ou matricule'
                  onChangeText={(event) =>{handleSearch(event);}}/>

              </Item>     
          </Header>
          <Content >  
           
            {studentsFilt.map((student, index) =>(
                              /*Quand je renvoit l'objet student, ca ne marche du coté de Statut*/
                <ListItem avatar key={index} onPress= {()=>navigation.navigate('Statut',
                          {firstName:student.firstName,
                           lastName:student.lastName,
                           state:student.state,
                           matricule:student.matriculeNr,
                           born:student.born,
                           grad:student.grad,
                           image:`data:image/png;base64,${student.image}`
                           })}>
                    <Left>
                        <Thumbnail source={{uri : `data:image/png;base64,${student.image}`}}/>
                    </Left>
                    <Body>
                      <Text style={styles.bigText}>{student.firstName + " " + student.lastName}</Text>
                      <Text style={styles.smallText}>{student.matriculeNr}</Text>                  
                    </Body>
                </ListItem>    
            ))}
          </Content>
        </Container>
    )
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#fff',
    marginTop: 20
  },
   itemSearch:{
     backgroundColor: '#9CA3AF',
     borderRadius: 20,
     height: 30
   },
   bigText:{
    fontSize: 15
   },
   smallText:{
     color: '#a4adc6'
   }
})
 
export default Search

