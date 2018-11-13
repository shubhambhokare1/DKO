import React from 'react';
import {Box, Grommet, Image,
        Heading, Paragraph } from 'grommet';
import {ABOUT_DKO_HEADING, ABOUT_DKO_DESCRIPTION,
        ABOUT_PRODUCT_TITLE} from '../constants/pages';
import {IMAGE_GROMMET_THEME, IMAGE_MARGIN, 
        ABOUT_DKO_CONTENT_THEME
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

// export const AboutContent = () => (
//     <Box direction='column' pad='small' margin={{top:'large'}} tag='div' responsive={true} focusable={true}>
//         <div className='grommetux-box grommetux-box--direction-column grommetux-box--align-center 
//         grommetux-box--responsive grommetux-box--pad-none'>
//             <Heading align='start'>
//                 {ABOUT_DKO}
//             </Heading>

//             <Paragraph align='center' size='xlarge' margin='small' >
//                 <p className='grommetux-paragraph grommetux-paragraph--large '>
//                     {ABOUT_DKO_DESCRIPTION}
//                 </p>
//             </Paragraph>
//         </div>        
//     </Box>
// );

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

