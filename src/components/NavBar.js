import React from 'react';
import '../style/App.css';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Grommet from 'grommet/components/Grommet';
import Image from 'grommet/components/Image';
import 'grommet/grommet-aruba.min.css'
import '../style/override.css'
import {MENU_OPTIONS} from '../constants/pages'

export const NavBar = () => (
    <Header>
        <Grommet>
        <svg className='grommetux-logo-icon' viewBox='0 0 182 182' width='182'
            height='182' role='img' aria-label='Grommet Logo'>
            <path role='presentation' strokeWidth='18' stroke='#bf5a00'
            fill='none' d='M 91,91 m 0,-82 a 82,82 0 1,1 0,164 a 82,82 0 1,1 0,-164'></path>
        </svg>
            {/* <Image src='dko.png' size='small'/> */}
        </Grommet>

        <Menu direction='row' closeOnClick pad='none'>
            <Box pad='none' direction='row' tag='nav'
            className='grommetux-menu grommetux-menu--row grommetux-menu--inline'
            focusable>
                <nav className='grommetux-box grommetux-box--direction-row
                grommetux-box--pad-none grommetux-menu--row grommetux-menu--inline'>
                <Anchor key='home' align='center' path='#' animateIcon
                    method='push' tag='a'>
                    <a href='#' className='grommetux-anchor grommetux-anchor--align-center'>
                        {MENU_OPTIONS[0]}
                    </a>
                </Anchor>

                <Anchor key='about' align='center' path='#' animateIcon
                    method='push' tag='a'>
                    <a href='#' className='grommetux-anchor grommetux-anchor--align-center'>
                        {MENU_OPTIONS[1]}
                    </a>
                </Anchor>  

                <Anchor key='dkc' align='center' path='#' animateIcon
                    method='push' tag='a'>
                    <a href='#' className='grommetux-anchor grommetux-anchor--align-center'>
                        {MENU_OPTIONS[2]}
                    </a>
                </Anchor> 

                <Anchor key='dashboard' align='center' path='#' animateIcon
                    method='push' tag='a'>
                    <a href='#' className='grommetux-anchor grommetux-anchor--align-center'>
                        {MENU_OPTIONS[3]}
                    </a>
                </Anchor> 

                </nav>          
            </Box>
        </Menu>
    </Header>

);

