import React, { Component } from 'react'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge,
  Text
} from 'native-base'

import { Link, Route } from 'react-router-native'

export default class SynFooter extends Component{
  render() {
    return (
      <Footer>
          <FooterTab>
                <Button>
                  <Link to="/">
                    <Icon name="apps" />
                  </Link>
                </Button>
                <Button>
                  <Link to="/camera">
                    <Icon name="camera" />
                  </Link>
                </Button>
              <Button active>
                  <Icon active name="navigate" />
              </Button>
              <Button>
                  <Icon name="person" />
              </Button>
          </FooterTab>
      </Footer>
    );
  }
}
