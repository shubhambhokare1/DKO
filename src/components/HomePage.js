import React from 'react';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import 'grommet/grommet-aruba.min.css';
import Paragraph from 'grommet/components/Paragraph';
import {HOME_HEADING_CONTENT, 
        HOME_IMAGINE_1, HOME_IMAGINE_2,
        HOME_IMAGINE_3} from '../constants/pages';

export const HomeImageTile = () => (
    <Box direction='column' pad='none' tag='div' responsive={true} focusable={true}>
        <Hero background={<Image src='kids.png' fit='cover' full={true}
        />} size='large'>
        </Hero>
    </Box>
);

export const HomeContent = () => (
    <Box direction='column' pad='small' margin={{top:'large'}} tag='div' responsive={true} focusable={true}>
        <div className='grommetux-box grommetux-box--direction-column grommetux-box--align-center 
        grommetux-box--responsive grommetux-box--pad-none'>
            <Heading align='center'>
                {HOME_HEADING_CONTENT}
            </Heading>

            <Paragraph align='center' size='xlarge' margin='small' >
                <p className='grommetux-paragraph grommetux-paragraph--xlarge '>
                    {HOME_IMAGINE_1}
                </p>
            </Paragraph>

            <Paragraph align='center' size='xlarge' margin='small' >
                <p className='grommetux-paragraph grommetux-paragraph--xlarge 
                grommetux-paragraph--width-large'>
                    {HOME_IMAGINE_2}
                </p>
            </Paragraph>

            <Paragraph align='center' size='xlarge' margin='small' >
                <p className='grommetux-paragraph grommetux-paragraph--xlarge 
                grommetux-paragraph--width-large'>
                    {HOME_IMAGINE_3}
                </p>
            </Paragraph>
        </div>        
    </Box>
);

export const Product = () => (
    <Box >

    </Box>
);