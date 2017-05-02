import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Header,
  Container,
  Content,
  Left,
  Text,
  Icon,
  Body,
  Button
} from 'native-base';

import {
  StackNavigator,
  NavigationActions
 } from 'react-navigation';

export default class AdaScreen extends Component{
  render() {
    const { state } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return(
      <Container>
        <Header>
          <Left>
            <Button
              onPress={ () => goBack()}
              >
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: '#FFF'}}>
              { state.params.title }
            </Text>
          </Body>
        </Header>
        <Content>
          <Text> Hi! I'm Ada </Text>
        </Content>
      </Container>
    );
  }
}
