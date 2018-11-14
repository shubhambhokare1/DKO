import React from 'react';
import {Box, Grommet, Image,
        Heading, Paragraph } from 'grommet';
import {ABOUT_DKO_HEADING, ABOUT_DKO_DESCRIPTION,
        ABOUT_PRODUCT_TITLE} from '../constants/pages';
import {IMAGE_GROMMET_THEME, IMAGE_MARGIN, 
        ABOUT_DKO_CONTENT_THEME, ABOUT_PRODUCT_THEME
    } from '../constants/themes';

export const AboutImageTile = () => (
    <Grommet theme={IMAGE_GROMMET_THEME}>
        <Box direction='column' height='medium' margin={IMAGE_MARGIN}>
            <Image src='asl.png' fit='cover' full={true}/>       
        </Box>
    </Grommet>
    
);

export const AboutContent = () => (
    <Grommet theme={ABOUT_DKO_CONTENT_THEME}>
        <Box direction='column' height='large'>
            <Heading level={1} textAlign='center' alignSelf='center'>
                    {ABOUT_DKO_HEADING}
            </Heading>
            <Paragraph alignSelf='center' textAlign='center' size='large' >
                {ABOUT_DKO_DESCRIPTION}
            </Paragraph>
        </Box>
    </Grommet>
);

export const ProductImageTile = () => (
    <Grommet theme={IMAGE_GROMMET_THEME}>
        <Box direction='column' height='medium' margin={IMAGE_MARGIN} background={{image: 'url(tech.png)'}}>
            <Grommet theme={ABOUT_PRODUCT_THEME}>
                <Heading level={1} textAlign='center' alignSelf='center'>
                        {ABOUT_PRODUCT_TITLE}
                </Heading>
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

