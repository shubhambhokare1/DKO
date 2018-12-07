import React from 'react';
import {Box, Grommet, Image, Stack,
        Heading, Paragraph, WorldMap } from 'grommet';
import {HOME_HEADING_CONTENT, 
        HOME_IMAGINE_1, HOME_IMAGINE_2,
        HOME_IMAGINE_3, HOME_VISION_HEADING,
        HOME_VISION_ONE, HOME_VISION_TWO} from '../constants/pages';
import {IMAGE_GROMMET_THEME, IMAGE_MARGIN,
        HOME_CONTENT_THEME, HOME_CONTENT_MARGIN} from '../constants/themes';

export const HomeImageTile = () => (
    <Grommet theme={IMAGE_GROMMET_THEME}>
        <Box direction='column' height='medium' margin={IMAGE_MARGIN}>
            <Image src='kids.png' fit='cover' full={true}/>
        </Box>
    </Grommet>
    
);

export const HomeContent = () => (
    <Grommet theme={HOME_CONTENT_THEME}>
        <Box direction='column' height='xlarge' >
            <Heading level={1} textAlign='center' alignSelf='center'>
                {HOME_HEADING_CONTENT}
            </Heading>
            <Paragraph alignSelf='center' textAlign='center' size='xxlarge' margin={HOME_CONTENT_MARGIN}>
                {HOME_IMAGINE_1}
            </Paragraph>
            <Paragraph alignSelf='center' textAlign='center' size='xxlarge' margin={HOME_CONTENT_MARGIN}>
                {HOME_IMAGINE_2}
            </Paragraph>
            <Paragraph alignSelf='center' textAlign='center' size='xxlarge' margin={HOME_CONTENT_MARGIN}>
                {HOME_IMAGINE_3}
            </Paragraph>
            
            <Box direction='column' alignSelf='center' margin={{top: 'large', left: 'xxlarge'}}>
                <WorldMap alignSelf='center'>

                </WorldMap>
            </Box>
        </Box>       
    </Grommet>
);

export const HomeVisionImage = () => (
    <Grommet theme={IMAGE_GROMMET_THEME}>
        <Box direction='column' height='medium' margin={IMAGE_MARGIN}>
            <Image src='sign_lang.jpg' fit='cover' full={true}/>
        </Box>
    </Grommet>
);

export const HomeVisionContent = () => (
    <Grommet theme={HOME_CONTENT_THEME}>
        <Box direction='column' height='medium' margin={IMAGE_MARGIN}>
            <Heading level={1} textAlign='center' alignSelf='center'>
                {HOME_VISION_HEADING}
            </Heading>
            <Paragraph alignSelf='center' textAlign='center' size='xxlarge' margin={HOME_CONTENT_MARGIN}>
                {HOME_VISION_ONE}
            </Paragraph>
            <Paragraph alignSelf='center' textAlign='center' size='xxlarge' margin={HOME_CONTENT_MARGIN}>
                {HOME_VISION_TWO}
            </Paragraph>
        </Box>
    </Grommet>
    
);

