import React from 'react'
import { View, Text } from 'react-native'

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Children } from 'react/cjs/react.production.min';
const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
           <ScrollView>
               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                   {children} 
               </TouchableWithoutFeedback>
           </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default KeyboardAvoidingWrapper
