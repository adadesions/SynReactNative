/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Text,
  Thumbnail,
  Right
} from 'native-base'
import { Grid, Col, Row } from 'react-native-easy-grid'
import MyHeader from './components/MyHeader'
import MyContent from './components/MyContent'

const Kim = () => (
  <Thumbnail size={ 500 } source={require('./public/kim.jpg')} />
);

const Trump = function(){
  return (
    <Thumbnail size={ 500 } source={require('./public/trump.jpg')} />
  );
}

export default class SynReactNative extends Component {
  render() {
    return (
      <Container>
        <MyHeader title="Synchrotron Light" />
        <Content>
          <MyContent />
          <Button success full>
            <Text>Vote!</Text>
          </Button>
          <Kim />
        </Content>
        <Footer>
          <Trump />
        </Footer>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  content: {
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  myPic: {
    height: 300
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('SynReactNative', () => SynReactNative);
