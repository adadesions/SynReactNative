import React, { Component } from 'react'
import { Image, ScrollView} from 'react-native'
import { Container, Content, List, ListItem, Text, Body, Left, Right} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SynContent extends Component{
  render() {
    return (


              <Grid>
                                      <Row  style={{  height:200 }} >
                                        <Image source={require('../public/team.jpg')}   style={{ width: '100%', height: '100%'}}/>
                                      </Row>
                                      <Row  style={{ width:'100%'}}>
                                        <List >
                                              <ListItem >

                                                  <Text >Tao</Text>

                                              </ListItem>
                                              <ListItem>
                                                  <Text>P'Nong</Text>
                                              </ListItem>
                                              <ListItem>
                                                  <Text>Nut</Text>
                                              </ListItem>
                                              <ListItem>
                                                  <Text>Toyakung</Text>
                                              </ListItem>
                                              <ListItem>
                                                  <Text>Lit</Text>
                                              </ListItem>
                                              <ListItem>
                                                  <Text>Ball</Text>
                                              </ListItem>

                                          </List>
                                        </Row>
              </Grid>


    );
  }
}
