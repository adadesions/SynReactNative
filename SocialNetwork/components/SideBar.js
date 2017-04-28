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
  Icon,
  Switch,
  Badge
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SideBar extends Component {
  render() {
    return (
          <Grid>
            <Row style={{  height:200,  backgroundColor:'#2b00ff' }} >
            <Image source={require('../public/slri.png')}
            style={{ width:'100%', height: 200}}/>
            </Row>
            <Row  style={{  height:'100%', width:'100%', backgroundColor:'#FFF'}} >
              <Container>
                <Content>
                    <ListItem icon>
                        <Left>
                            <Icon name="mail" />
                        </Left>
                        <Body>
                          <Text>News</Text>
                        </Body>
                        <Right>
                          <Badge>
                              <Text>5</Text>
                          </Badge>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="star" />
                        </Left>
                        <Body>
                          <Text>About</Text>
                        </Body>
                        <Right>
                          <Badge>
                              <Text>5</Text>
                          </Badge>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="resize" />
                        </Left>
                        <Body>
                          <Text>Beamline</Text>
                        </Body>
                        <Right>
                          <Badge>
                              <Text>8</Text>
                          </Badge>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="aperture" />
                        </Left>
                        <Body>
                          <Text>Accelerator</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="heart" />
                        </Left>
                        <Body>
                          <Text>Contact Us</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                  </Content>
                </Container>
              </Row>
          </Grid>
    );
  }
}
