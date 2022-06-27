import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View,Text, TouchableOpacity , ActivityIndicator, StyleSheet, Image} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { MsgBoxStatut} from '../components/styles';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import {Container,Header,Title,Content,Button,Icon, Right,
    Body,Left,Picker,Footer, FooterTab, ListItem, Thumbnail, Item, Input} from 'native-base';


const Statut = ({navigation, route}) => {
  const [messageStatut, setMessageStatut]= useState();
  const [typeMessage, setTypeMessage] = useState();
  useEffect(() => {
    if (route.params.state == "En Regle"){
       setTypeMessage("Ok");
       setMessageStatut("En règle"); 
    }else{
      setTypeMessage("Pas Ok");
      setMessageStatut("Pas en règle");
    }
  },[])

    return (
      <Container>
      <StatusBar style='dark'/>
      
      <Header> 
      <IconButton style={styles.iconbut}
         icon="arrow-left"
         color={Colors.white}
         size={25}
         onPress={() => navigation.navigate('Search')}
      /> 
      <Text style={styles.textHeader}>Retour à la recherche</Text>
      </Header>
      <Content >    
        <Image source={{uri:route.params.image}} 
                style={styles.imgPhoto}/>
        <Text style={styles.textLabel}>Nom :</Text>
        <Text style={styles.textContent}>{route.params.firstName + " " + route.params.lastName}</Text>
        <Text style={styles.textLabel}>Matricule :</Text>
        <Text style={styles.textContent}>{route.params.matricule}</Text>
        <Text style={styles.textLabel}>Date de naissance :</Text>
        <Text style={styles.textContent}>{route.params.born}</Text>
        <Text style={styles.textLabel}>Semestre :</Text>
        <Text style={styles.textContent}>{route.params.grad}</Text>
        <Image source = {typeMessage=='Ok'
                             ? require('../assets/img/Ok.png')
                             : require('../assets/img/notOk.png')}
                style={styles.imgStatut}/>
        <MsgBoxStatut type={typeMessage} >{messageStatut}</MsgBoxStatut>
      </Content>
    </Container>
    )
};

 const styles = StyleSheet.create({
    iconbut:{
      marginTop:20,
      marginLeft: -80
    },
    textHeader:{
      color:'white',
      fontSize:20,
      marginTop:25
    },
    imgPhoto:{
      flex:1,
      paddingTop:10,
      height:300,
      width:'100%'
    },
    imgStatut:{
      height : 100,
      width: 100,
     marginLeft: '35%'
    },
    textContent:{
      fontSize:18
    },
    textLabel:{
      fontSize: 19,
      fontWeight: 'bold',
      color: '#0d3398'
    }
  })
 
export default Statut

