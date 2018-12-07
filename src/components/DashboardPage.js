import React, {Component} from 'react';
import {Box, Grommet, AccordionPanel, Button,
        Heading, Paragraph, Text, Video, Grid} from 'grommet';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import cs
import {DASHBOARD_THEME, DASHBOARD_VIDEO_THEME} from '../constants/themes';
import '../style/override.css';

export class SubjectDescription extends Component {
    render() {
        const { heading, description, video, videoASL } = this.props;

        return (
            <Grommet theme={DASHBOARD_THEME}>
                <Box pad={{ bottom: 'medium', horizontal: 'small', top: 'small'}}
                    gap='medium'>
                    <Box gap='xsmall' margin={{left:'large', right:'large'}}>
                        <Heading level={3} color='neutral-5'>
                            {heading}
                        </Heading>
                        <Grid fill areas={[
                            { name: 'khan_academy', start:[0, 0], end:[0,0]},
                            { name: 'translated_video', start:[1, 0], end:[1, 0]},
                        ]}
                        columns={['1/2', '1/2']}
                        rows={['flex']} gap='small'>
                            <Box gridArea='khan_academy' >
                                <Player src={video}/>                                
                            </Box>
                            <Box gridArea='translated_video' >
                                <Player src={videoASL}/>
                            </Box>                   
                        </Grid>
                        
                        <Box gridArea='video_description' height='small'>
                            <Text margin={{bottom:'small'}}> {description} </Text>
                            <Button label="Upload"/>
                        </Box>                     
                    </Box>
                    
                </Box>
            </Grommet>
        );
    }
    
};

export class Panel extends Component {
    state = {
        hovering: false
    };

    renderPanelTitle = () => {
        const { label } = this.props;
        const { hovering } = this.state;

        return (
            <Box background='light-1' margin={{right: 'xlarge'}} >
                <Heading level={2} margin={{left: 'large'}}>
                    {label}
                </Heading>
            </Box>
        );
    };

    render() {
        const { children } = this.props;

        return (
            <AccordionPanel label={this.renderPanelTitle()}
                onMouseOver={() => this.setState({ hovering: true })}
                onMouseOut={() => this.setState({ hovering: false })}
                onFocus={() => this.setState({ hovering: true })}
                onBlur={() => this.setState({ hovering: false })}>
                {children}
            </AccordionPanel>
        );
    }
}