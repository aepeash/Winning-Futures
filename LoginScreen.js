import React from 'react';
import { TextInput, Text, View, 
  Image, TouchableOpacity, KeyboardAvoidingView, Alert} 
  from 'react-native';

import { loginStyles } from './Styles';
import { getDataModel } from './DataModel';

export class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
  
      this.dataModel = getDataModel();
  
      this.state = {
        mode: 'login',
        emailInput: '',
        displayNameInput: '',
        passwordInput: '',
        passwordCheckInput: ''
      }
    }

    //Functionsssss

    
}