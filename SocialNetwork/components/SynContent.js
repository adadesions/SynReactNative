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
  Thumbnail
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SynContent extends Component{
  render() {
    return (
          <Container>
          <Content>
              <Grid>
                <Row  style={{  height:150 }} >
                  <Image source={require('../public/team.jpg')}
                  style={{ width: '100%', height: '100%'}}/>
                </Row>


                <Row  style={{ width:'100%',paddingTop: 10}}>
                <Col>
                  <List >
                  <ListItem >

                          <Text>Team Dragon Ball</Text>

                  </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail source={require('../public/nong.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text>P'Nong</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail size={80}  source={require('../public/toy.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text>Toyakung</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail size={80}  source={require('../public/nut.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text>Nut</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail size={80}  source={require('../public/tao.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text>Tao</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail size={80}  source={require('../public/lit.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text>Lit</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail size={80}  source={require('../public/tao.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text>Ball</Text>
                        </Right>
                    </ListItem>

                </List>
                </Col>

                <Col>
                <Row  style={{ width:'100%',paddingTop: 10}}>
                  <List >
                  <ListItem >

                          <Text style={{color:'#f00'}}>Team Red Zone</Text>

                  </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail source={require('../public/mai.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text style={{color:'#00f'}}>P'Mai</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail size={80}  source={require('../public/win.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text style={{color:'#00f'}}>Win</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
                        <Left>
                            <Thumbnail size={80}  source={require('../public/beer.jpg')} />
                        </Left>
                        <Right style={{ paddingLeft: 20}}>
                            <Text style={{color:'#00f'}}>Beer</Text>
                        </Right>
                    </ListItem>

                </List>
              </Row>
              </Col>

              </Row>





            </Grid>
            </Content>
        </Container>
    );
  }
}
