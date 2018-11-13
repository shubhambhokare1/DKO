import React from 'react';
import {Anchor, Box, Image, Grommet} from 'grommet';
import {MENU_OPTIONS} from '../constants/pages'
import {NAV_BAR_THEME} from '../constants/themes';

export const NavBar = () => (
    <Grommet theme={NAV_BAR_THEME}>
        <Box direction='row'>
            <Box basis='xxsmall' height='xxsmall'>
                <Image src='dko.png'/>
            </Box>
            <Anchor label={MENU_OPTIONS[0]} onClick={() => { }} margin='small'/>
            <Anchor label={MENU_OPTIONS[1]} onClick={() => { }} margin='small'/>
            <Anchor label={MENU_OPTIONS[2]} onClick={() => { }} margin='small'/>
            <Anchor label={MENU_OPTIONS[3]} onClick={() => { }} margin='small'/>
        </Box>
    </Grommet>
    
);

