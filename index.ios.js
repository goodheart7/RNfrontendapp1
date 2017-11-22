
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import MainScreen from './app/components/Main';

export default class Kitchry extends Component {
  render() {
    return (
      <MainScreen/>
    );
  }
}
AppRegistry.registerComponent('Kitchry', () => Kitchry);
