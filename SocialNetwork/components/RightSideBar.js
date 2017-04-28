import React, { Component } from 'react'
import {
  Button,
  Container,
  Text
} from 'native-base'

export default class RightSideBar extends Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>W</Text>
        </Button>
        <Button>
          <Text>X</Text>
        </Button>
        <Button>
          <Text>Y</Text>
        </Button>
        <Button>
          <Text>Z</Text>
        </Button>
      </Container>
    );
  }
}
