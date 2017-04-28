import React, { Component } from 'react'

// Packages Components
import {
  StyleProvider,
  Container
} from 'native-base';

// Theme
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

// Customize Components
import SynHeader from './SynHeader'
import SynFooter from './SynFooter'
import SynContent from './SynContent'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <SynHeader></SynHeader>
          <SynContent></SynContent>
          <SynFooter></SynFooter>
        </Container>
      </StyleProvider>
    );
  }
}
