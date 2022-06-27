import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Formik, formik} from 'formik';
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';
import { InnerContainer, StyledContainer, Colors,
         PageLogo, PageTitle, SubTitle, StyledFormArea, 
         LeftIcon, StyledInputLabel, StyledTextInput, RightIcon,
         StyledButton, ButtonText, MsgBox, Line, ExtraText, 
         ExtraView, TextLink, TextLinkContent
      } from '../components/styles';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import axios from 'axios';
import  data from '../Datas/user.json';


// il faut mettre valable pour 30 mn

const {blueGreat, darkLight, primary} = Colors;

const Auth = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleAuth = (credentials, setSubmitting) =>{
        handleMessage(null);
        const url = 'https://cameroonit.net/studentchecker/api/Users/authentication';
        axios
            .post(url, credentials)
            .then((response)=>{ 
               if (response.data.token !== ''){
                   navigation.navigate('Search', {token:response.data.token})
               }
            })
            .catch(error=>{        
                setSubmitting(false);
                handleMessage("Echec d'authentification!");
        })
    }  
    const handleMessage = (message, type='FAILED') =>{
        setMessage(message);
        setMessageType(type);
    }

    return (
      <KeyboardAvoidingWrapper >
        <StyledContainer  auth={true} >
            <StatusBar style='dark'/>
            <InnerContainer >
            <PageLogo source={require('../assets/img/logo.png')} resizeMode='cover' />
              <PageTitle>Connectez-vous</PageTitle>
            
              <Formik 
                 initialValues={{userName: '', password: ''}}
                 onSubmit={(values, {setSubmitting})=>{
                   if(values.userName == '' || values.password == ''){
                       handleMessage('Veuillez remplir tous les champs');
                       setSubmitting(false);
                    }else{
                       handleAuth(values, setSubmitting);
                    }
                 }}>
                 {({handleChange, handleBlur, handleSubmit, values, isSubmitting})=> (
                  <StyledFormArea>
                    <MyTextInput 
                     label='Nom et prénom'
                     icon='person'
                     placeholder='Nom Prénom'
                     placeholderTextColor={darkLight}
                     onChangeText={handleChange('userName')}
                     onBlur={handleBlur('userName')}
                     value={values.userName}
                     keyboardType='email-address'
                    />

                   <MyTextInput 
                     label='Password'
                     icon='lock'
                     placeholder=''
                     placeholderTextColor={darkLight}
                     onChangeText={handleChange('password')}
                     onBlur={handleBlur('password')}
                     value={values.password}
                     secureTextEntry={hidePassword}
                     isPassword={true}
                     hidePassword={hidePassword}
                     setHidePassword={setHidePassword}
                    />
                    <MsgBox type={messageType}>{message}</MsgBox>
                    
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Connexion</ButtonText>
                        </StyledButton>
                     
                 
                  </StyledFormArea>)}
              </Formik>
            </InnerContainer>
        </StyledContainer>
     </KeyboardAvoidingWrapper>

    )
};
 
 const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) =>{
   return (
       <View>
           <LeftIcon>
             <Octicons name={icon} size={20} color={blueGreat} />
           </LeftIcon>
           <StyledInputLabel>{label}</StyledInputLabel>
           <StyledTextInput {...props}/>
           {isPassword && (
               <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                   <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={darkLight}/>
               </RightIcon>
           )}
       </View>
   );
 }

export default Auth

