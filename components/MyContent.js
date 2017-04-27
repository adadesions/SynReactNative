import React, { Component } from 'react'
import {
  Image
} from 'react-native'
import {
  Grid, Row, Col
} from 'react-native-easy-grid'
import {
  Thumbnail,
  Right
} from 'native-base'

export default class MyContent extends Component {
  render() {
    return (
      <Grid>
        <Row style={{  backgroundColor: '#00FF00', height:200 }}>
          <Image
            source={{ uri: 'http://localhost:3000/kim.jpg'}}
            style={{ width: '100%', height: '100%' }}
          />
        </Row>
        <Row style={{  backgroundColor: '#0000FF', height:300 }}>
          <Col style={{ backgroundColor: '#FF0000', paddingTop: 20 }}>
            <Right>
              <Thumbnail size={ 500 } source={{ uri: 'http://localhost:3000/nasa.jpg' }} />
            </Right>
          </Col>
          <Col style={{ backgroundColor: '#FF00FF'}}>
            <Image
              source={require('../public/usa.png')}
              style={{flex:1, width: null, height:null, paddingTop: 20}}
              >
            <Right>
              <Thumbnail size={ 500 } source={require('../public/trump.jpg')} />
            </Right>
          </Image>
          </Col>
        </Row>
      </Grid>
    );
  }
}
