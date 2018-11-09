import React, { Component } from 'react';
import '../style/App.css';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import 'grommet/grommet-aruba.min.css'
import {NavBar} from '../components/NavBar';
import { AboutImageTile, AboutContent, ProductImageTile } from '../components/AboutPage';


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
    return <App centered={false}>
      <Box direction='column' pad='none' tag='div' responsive focusable>
        <div id={undefined} className='grommetux-box grommetux-box--direction-column 
        grommetux-box--responsive grommetux-box--pad-none' role={undefined} 
        tabIndex={undefined} onClick={undefined}>
          <NavBar/>
          <AboutImageTile/>
          <AboutContent/>
          <ProductImageTile/>
        </div>
     </Box>
      
      
    </App>
    ;
  }
}

export default About;