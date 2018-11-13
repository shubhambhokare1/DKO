import React, { Component } from 'react';
import {Grommet} from 'grommet';
import {NavBar} from '../components/NavBar';
import {HomeImageTile, HomeContent} from '../components/HomePage';

class Home extends Component {
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
      <HomeImageTile/>
      <HomeContent/>
    </Grommet>;
  }
}

export default Home;
