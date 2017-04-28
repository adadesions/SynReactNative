import React, { Component } from 'react'
import {
  Button,
  Container,
  Text
} from 'native-base'

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>A</Text>
        </Button>
        <Button>
          <Text>B</Text>
        </Button>
        <Button>
          <Text>C</Text>
        </Button>
        <Button>
          <Text>D</Text>
        </Button>
      </Container>
    );
  }
}
