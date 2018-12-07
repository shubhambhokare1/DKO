import React, { Component } from 'react';
import {Grommet, Box, Accordion, Button,
        Heading} from 'grommet';
import {NavBar} from '../components/NavBar';
import {Panel, SubjectDescription} from '../components/DashboardPage';
import {DASHBOARD_THEME, DASHBOARD_ACCORDIAN_THEME,DASHBOARD_BUTTON_THEME} from '../constants/themes';
import {PRE_ALGEBRA_LIST, HIGH_SCHOOL_GEOEMTRY_LIST,
        STATISTICS_PROBABILITY_LIST, PHYSICS_LIST,
        CHEMISTRY_LIST, BIOLOGY_LIST} from '../constants/pages';

class Dashboard extends Component {
  state = {
    highlightLoaded: false
  };

  render() {
    const {highlightLoaded} = this.state;

    return (<Grommet>
      <NavBar/>
      <Grommet theme={DASHBOARD_THEME}>
        <Box direction='column' height='xsmall' align='center'>
            <Heading level={1} textAlign='center' >
                Math
            </Heading>
            
        </Box>

        <Box fill direction='row' pad='small' margin={{left: 'large', right: 'large'}}> 
          <Box flex={true} background='light-1' margin={{right: 'xlarge'}}>
            <Grommet theme={DASHBOARD_ACCORDIAN_THEME}>
              <Accordion multiple
                onActive={activeIndexes => {
                  setTimeout(() => {
                    this.setState({ highlightLoaded: true });
                  }, 1000)
                }}>
                
                <Panel label='Pre-Algebra'>
                    <SubjectDescription heading={PRE_ALGEBRA_LIST[0].title}
                      description={PRE_ALGEBRA_LIST[0].description}
                      video='Fight Song.mp3' videoASL='FightSongASL.mp4'
                    />
                    <SubjectDescription heading={PRE_ALGEBRA_LIST[1].title}
                      description={PRE_ALGEBRA_LIST[1].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />
                    <SubjectDescription heading={PRE_ALGEBRA_LIST[2].title}
                      description={PRE_ALGEBRA_LIST[2].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />

                    <SubjectDescription heading={PRE_ALGEBRA_LIST[2].title}
                      description={PRE_ALGEBRA_LIST[2].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />
                </Panel>

                <Panel label='High School Geometry'>
                    <SubjectDescription heading={HIGH_SCHOOL_GEOEMTRY_LIST[0].title}
                      description={HIGH_SCHOOL_GEOEMTRY_LIST[0].description}
                      video='Fight Song.mp3' videoASL='FightSongASL.mp4'
                    />
                    <SubjectDescription heading={HIGH_SCHOOL_GEOEMTRY_LIST[1].title}
                      description={HIGH_SCHOOL_GEOEMTRY_LIST[1].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />
                    <SubjectDescription heading={HIGH_SCHOOL_GEOEMTRY_LIST[2].title}
                      description={HIGH_SCHOOL_GEOEMTRY_LIST[2].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />
                </Panel>

                {/* <Panel label='Statistics and probability'> 
                    <SubjectDescription heading={STATISTICS_PROBABILITY_LIST[0].title}
                      description={STATISTICS_PROBABILITY_LIST[0].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />
                    <SubjectDescription heading={STATISTICS_PROBABILITY_LIST[1].title}
                      description={STATISTICS_PROBABILITY_LIST[1].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />
                    <SubjectDescription heading={STATISTICS_PROBABILITY_LIST[2].title}
                      description={STATISTICS_PROBABILITY_LIST[2].description}
                      video='Video1.mp4' videoASL='Video2.mp4'
                    />
                </Panel> */}

              </Accordion>
            </Grommet>
          </Box>
        </Box>
        
        
        <Box direction='column' height='xsmall' align='center'>
            <Heading level={1} textAlign='center' >
                Science
            </Heading>
        </Box>

        <Box fill direction='row' pad='small' margin={{left: 'large', right: 'large'}}> 
          <Box flex={true} background='light-1' margin={{right: 'xlarge'}}>
            <Grommet theme={DASHBOARD_ACCORDIAN_THEME}>
              <Accordion multiple
                onActive={activeIndexes => {
                  setTimeout(() => {
                    this.setState({ highlightLoaded: true });
                  }, 1000)
                }}>
                
                <Panel label='Physics'>
                    <SubjectDescription heading={PHYSICS_LIST[0].title}
                      description={PHYSICS_LIST[0].description}
                    />
                    <SubjectDescription heading={PHYSICS_LIST[1].title}
                      description={PHYSICS_LIST[1].description}
                    />
                    <SubjectDescription heading={PHYSICS_LIST[2].title}
                      description={PHYSICS_LIST[2].description}
                    />
                </Panel>

                <Panel label='Chemistry'>
                    <SubjectDescription heading={CHEMISTRY_LIST[0].title}
                      description={CHEMISTRY_LIST[0].description}
                    />
                    <SubjectDescription heading={CHEMISTRY_LIST[1].title}
                      description={CHEMISTRY_LIST[1].description}
                    />
                    <SubjectDescription heading={CHEMISTRY_LIST[2].title}
                      description={CHEMISTRY_LIST[2].description}
                    />
                </Panel>

                <Panel label='Biology'>
                    <SubjectDescription heading={BIOLOGY_LIST[0].title}
                      description={BIOLOGY_LIST[0].description}
                    />
                    <SubjectDescription heading={BIOLOGY_LIST[1].title}
                      description={BIOLOGY_LIST[1].description}
                    />
                    <SubjectDescription heading={BIOLOGY_LIST[2].title}
                      description={BIOLOGY_LIST[2].description}
                    />
                </Panel>
              </Accordion>
            </Grommet>
          </Box>
        </Box>
          
      </Grommet>
      
    </Grommet>);
  }
}

export default Dashboard;