import React from 'react';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import 'grommet/grommet-aruba.min.css';
import Paragraph from 'grommet/components/Paragraph';
import Card from 'grommet/components/Card';
import {ABOUT_DKO, ABOUT_DKO_DESCRIPTION,
        ABOUT_PRODUCT} from '../constants/pages';

export const AboutImageTile = () => (
    <Box direction='column' pad='none' tag='div' responsive={true} focusable={true}>
        <Hero background={<Image src='asl.png' fit='cover' full={true}
        />} size='large'>
        </Hero>
    </Box>
);

export const AboutContent = () => (
    <Box direction='column' pad='small' margin={{top:'large'}} tag='div' responsive={true} focusable={true}>
        <div className='grommetux-box grommetux-box--direction-column grommetux-box--align-center 
        grommetux-box--responsive grommetux-box--pad-none'>
            <Heading align='start'>
                {ABOUT_DKO}
            </Heading>

            <Paragraph align='center' size='xlarge' margin='small' >
                <p className='grommetux-paragraph grommetux-paragraph--large '>
                    {ABOUT_DKO_DESCRIPTION}
                </p>
            </Paragraph>
        </div>        
    </Box>
);

export const ProductImageTile = () => (
    <Box direction='column' pad='none' tag='div' responsive={true} focusable={true}>
        <Hero background={<Image src='tech.png' fit='cover' full={true} />} size='large'
        backgroundColorIndex='dark'>
            <Box direction='row' justify='center' align='center'>
                <Heading margin='none'>
                    {ABOUT_PRODUCT}
                </Heading>
            </Box>
            <Box basis='1/3'>
                <Card >

                </Card>
            </Box>
            <Box basis='1/3'>

            </Box>
            <Box basis='1/3'>

            </Box>
        </Hero>
    </Box>
);

