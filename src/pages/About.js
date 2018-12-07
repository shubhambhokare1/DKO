import React, { Component } from 'react';
import {Grommet} from 'grommet';
import {NavBar} from '../components/NavBar';
import {AboutImageTile, AboutContent, VisionContent,
        ProductImageTile} from '../components/AboutPage';

class About extends Component {
  constructor(props) {
    super(props);  
    this.setState = {};
  }

  componentDidMount() {
    // Fetch all the api and db data
  }

  componentWillUnmount() {

  }
  
  render() {
    return <Grommet>
      <NavBar/>
      <AboutImageTile/>
      <AboutContent/>
      <ProductImageTile/>
    </Grommet>;
  }
}

export default About;