/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import {
  StyleProvider,
  Container,
  Header,
  Content,
  Footer
} from 'native-base';

// My Components
import SynHeader from './components/SynHeader'
import SynFooter from './components/SynFooter'
import SynContent from './components/SynContent'

export default class SocialNetwork extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <SynHeader></SynHeader>
          <SynContent></SynContent>
          <SynFooter></SynFooter>
        </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('SocialNetwork', () => SocialNetwork);
