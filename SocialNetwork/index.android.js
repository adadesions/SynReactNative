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

export default class SocialNetwork extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('SocialNetwork', () => SocialNetwork);
