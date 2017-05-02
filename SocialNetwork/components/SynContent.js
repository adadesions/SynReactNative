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

const members1 = [
  {name: 'P\'Nong', imgName: 'nong.jpg'},
  {name: 'Toyakung', imgName: 'toy.jpg'},
  {name: 'Nut', imgName: 'nut.jpg'},
  {name: 'Tao', imgName: 'tao.jpg'},
  {name: 'Lit', imgName: 'lit.jpg'},
  {name: 'Ball', imgName: 'tao.jpg'}
];

const RenderListItem = (props) => {
  const members = props.members;
  const listItem = members.map( (member) =>
      <ListItem avatar style={{ paddingTop: 10, paddingBottom: 10}}>
        <Left>
            <Thumbnail source={require(`../public/${member.imgName}`)} />            
        </Left>
        <Right style={{ paddingLeft: 20}}>
            <Text>{member.name}</Text>
        </Right>
      </ListItem>
  );

  return (
    <List>
      {listItem}
    </List>
  );
};

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
                  </List>
                  <RenderListItem members={members1} />
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
