import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { homeStyles } from './Styles';
import { getDataModel } from './DataModel';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.self = this.props.route.params.currentUser;
    this.dataModel = getDataModel();

    this.state = {
    }
  }
  render() {
    return (
      <View>
          <Text>Hello welcome to home screen</Text>
      </View>
    )
  }
}