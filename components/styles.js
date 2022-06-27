import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import  Constants  from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#fff",
    secondary: "#E5E7EB",
    tertiary: "#1f2937",
    darkLight: "#9CA3AF",
   // brand: "#6D28D9",
    blueGreat: "#0d3398",
    green: "#10B981",
    red: "#EF4444",
};
const {primary, secondary, tertiary, darkLight, blueGreat, green, red} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};
 
  ${(props) =>props.auth && `
  padding-bottom: 200px;
 `}
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

//c'est apparemment l'héritage de InnerContainer
export const SearchContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 50px;
`;

export const Avatar = styled.Image`
 width: 100px;
 height: 100px;
 margin: auto;
 border-radius: 50px;
 border-width: 2px;
 border-color: ${secondary};
 margin-bottom: 10px;
 margin-top: 10px;
`;

export const SearchImage = styled.Image`
 height: 50%;
 min-width: 100%;
`;

export const PageTitle = styled.Text`
 font-size: 18px;
 text-align: center;
 font-weight: bold;
 color: ${blueGreat};
 padding: 10px;

 ${(props) =>props.search && `
  font-size: 35px;
 `}
`;

export const SubTitle = styled.Text`
 font-size: 10px;
 margin-bottom: 20px;
 letter-spacing: 1px;
 font-weight: bold;
 color: ${tertiary};

 ${(props) =>props.search && `
 margin-bottom: 5px;
 font-weight: normal;
`}
`;

export const StyledFormArea = styled.View`
 width: 100%;
`;

export const StyledTextInput = styled.TextInput`
 background-color: ${secondary};
 padding: 15px;
 padding-left: 55px;
 padding-right: 55px;
 border-radius: 5px;
 font-size: 16px;
 height: 50px;
 margin-vertical: 3px;
 margin-bottom: 10px;
 color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
 color: ${tertiary};
 font-size: 13px;
 text-align: left;
`;

export const LeftIcon = styled.View`
 left: 15px;
 top: 38px;
 position: absolute;
 z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
 right: 15px;
 top: 38px;
 position: absolute;
 z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
 padding: 15px;
 background-color: ${blueGreat};
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 margin-vertical: 5px;
 height: 50px;

 ${(props)=>props.google == true && `
   background-color:${green};
   flex-direction:row;
   justify-content: center;
 `}
`;

export const ButtonText = styled.Text`
 color: ${primary};
 font-size: 16px;
  
 ${(props)=>props.google == true && `
 padding: 2px;
`}
`;

export const MsgBox = styled.Text`
 text-align: center;
 font-size: 13px;
 color: ${(props)=>(props.type == 'SUCCESS' ? green : red)};
`;

export const MsgBoxStatut = styled.Text`
 text-align: center;
 font-size: 25px;
 color: ${(props)=>(props.type == 'Ok' ? green : red)};
`;

export const Line = styled.View`
 height: 1px;
 width: 100%;
 background-color: ${darkLight};
 margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
 justify-content: center;
 align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${blueGreat};
  font-size: 15px;
`;



