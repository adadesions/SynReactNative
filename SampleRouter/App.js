import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left
} from 'native-base';
import {
  StackNavigator,
  NavigationActions
 } from 'react-navigation';

import AdaScreen from './components/AdaScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            {/* { this.navigationOptions.title } */}
            <Text style={{color: '#FFF'}}>HomeScreen</Text>
          </Left>
        </Header>
        <Content>
          <Button
              onPress={() => navigate('Ada', {title: "AdaDeSions"})}
              success
              full >
          <Text> Click me to Ada Page </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


const App = StackNavigator({
    Home: { screen: HomeScreen },
    Ada: { screen: AdaScreen },
  },
  {
    headerMode: 'none'
  }
);

export default App;
