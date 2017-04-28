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


export default class SynFooter extends Component{
  render() {
    return (
      <Footer>
          <FooterTab>
                <Button>
                    <Icon name="apps" />
                </Button>
                <Button>
                    <Icon name="camera" />                  
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
