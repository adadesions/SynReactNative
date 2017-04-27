import React, { Component } from 'react'
import {
  Image
} from 'react-native'
import {
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon
} from 'native-base'

export default class MyHeader extends Component {
  render(){
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{ this.props.title }</Title>
        </Body>
      </Header>
    );
  }
}
