import React from 'react';
import {Box, Grommet, Image, Grid, Text,
        Heading, Paragraph } from 'grommet';
import {ABOUT_DKO_HEADING, ABOUT_DKO_DESCRIPTION,
        ABOUT_PROJECT_PARTNER_TITLE,
        } from '../constants/pages';
import {IMAGE_GROMMET_THEME, IMAGE_MARGIN,
        ABOUT_THEME, ABOUT_PRODUCT_THEME
    } from '../constants/themes';

export const AboutImageTile = () => (
    <Grommet theme={IMAGE_GROMMET_THEME}>
        <Box direction='column' height='medium' margin={IMAGE_MARGIN}>
            <Image src='asl.png' fit='cover' full={true}/>       
        </Box>
    </Grommet>
    
);


export const AboutContent = () => (
    <Grommet theme={ABOUT_THEME}>
        <Box direction='column' height='medium'>
            <Heading level={1} textAlign='center' alignSelf='center' >
                {ABOUT_DKO_HEADING}
            </Heading>
            <Text alignSelf='center' textAlign='center' size='large' margin='large'>
                {ABOUT_DKO_DESCRIPTION}
            </Text>
        </Box>
    </Grommet>
);

export const ProductImageTile = () => (
    <Grommet theme={IMAGE_GROMMET_THEME}>
        <Box direction='column' height='medium' margin={IMAGE_MARGIN} background={{image: 'url(tech.png)', opacity:'weak'}}>
            <Grommet theme={ABOUT_PRODUCT_THEME}>
                <Box>
                    <Heading level={1} textAlign='center' alignSelf='center' >
                        {ABOUT_PROJECT_PARTNER_TITLE}
                    </Heading>
                    <Grid fill areas={[
                        { name: 'khan_academy', start:[0, 0], end:[0,0]},
                        { name: 'dkc', start:[1, 0], end:[1, 0]},
                        { name: 'ntid', start:[2, 0], end:[2, 0]},
                    ]}
                    columns={['1/3', '1/3', '1/3']}
                    rows={['medium']} gap='small'>
                        <Box gridArea='khan_academy' direction='column' height='small' margin={IMAGE_MARGIN}>
                            <Image src='khan_academy.png' fit='contain' />       
                        </Box>
                        <Box gridArea='dkc' direction='column' height='small' margin={IMAGE_MARGIN}>
                            <Image src='dkc_logo.png' fit='contain' />
                        </Box>
                        <Box gridArea='ntid' direction='column' height='small' margin={IMAGE_MARGIN}>
                            <Image src='ntid_logo.png' fit='contain' />
                        </Box>                   
                    </Grid>
                </Box>
            </Grommet>            
        </Box>
    </Grommet>
);

// export const ProductImageTile = () => (
//     <Box direction='column' pad='none' tag='div' responsive={true} focusable={true}>
//         <Hero background={<Image src='tech.png' fit='cover' full={true} />} size='large'
//         backgroundColorIndex='dark'>
//             <Box direction='row' justify='center' alignSelf='end'>
//                 <Heading margin='none'>
//                     {ABOUT_PRODUCT_TITLE}
//                 </Heading>
//             </Box>
//             <Box direction='row-responsive' justify='center'
//                 align='center' pad='xlarge' gap='medium'>

//             </Box>
//         </Hero>
//     </Box>
// );

