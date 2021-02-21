import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { studentStyles } from './Styles';
import { getDataModel } from './DataModel';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export class StudentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.self = this.props.route.params.currentUser;
    this.dataModel = getDataModel();
  }
  render() {
      return(
          <View>
          <Text> Hellooo</Text>
          </View>
      );
  }
}