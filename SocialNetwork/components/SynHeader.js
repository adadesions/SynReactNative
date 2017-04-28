import React, { Component } from 'react'
import {
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon,
  Thumbnail,
  Right,
  Text
} from 'native-base'
import {
  Image
} from 'react-native'
export default class SynHeader extends Component{
  render() {
    return (
      <Header>
         <Left>
            <Button
              transparent
              onPress = { this.props.onPress }
            >
               <Icon name='menu' />
            </Button>
         </Left>
         <Body style={{justifyContent: 'flex-start',flexDirection: 'row'}}>
            <Image
               source={require('../public/slri.jpg')}
               style={{width:'50%', height: '50%'}}
            />
            <Text style={{color:'#FFF'}}>Synchrotron</Text>
         </Body>
         <Right>
            <Button transparent>
               <Icon name='log-out' />
            </Button>
         </Right>
      </Header>
    );
  }
}
