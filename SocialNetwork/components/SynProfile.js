import React, { Component } from 'react'
import {
  Image,
  ScrollView
} from 'react-native'
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Left,
  Right,
  Thumbnail,
  Card,
  CardItem,
  Button,
  Icon
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SynContent extends Component{
  render() {
    return (
      <Container>
          <Content>
              <Card style={{ flex: 0 }}>
                  <CardItem>
                      <Left>
                          <Thumbnail square style={{ width:100 }} source={require('../public/slri.jpg')} />
                          <Body>
                              <Text>SLRI</Text>
                              <Text note>April 28, 2017</Text>
                          </Body>
                      </Left>
                  </CardItem>
                  <CardItem>
                      <Body>
                          <Image style={{ resizeMode: 'cover', width:'100%' }} source={require('../public/tao.jpg')} />
                          <Text style={{ paddingTop: 10 }} >
                              Mr. เต๋า แบดมือหนึ่ง
                          </Text>
                          <Button transparent textStyle={{color: '#87838B'}}>
                              <Icon name="logo-github" />
                              <Text>1,926 stars</Text>
                          </Button>
                      </Body>
                  </CardItem>
             </Card>
          </Content>
      </Container>
    );
  }
}
