import React, {Component} from 'react';
import {Box, Grommet, AccordionPanel,
        Heading, Paragraph, Text } from 'grommet';
import {DASHBOARD_THEME} from '../constants/themes';
import '../style/override.css';

export class SubjectDescription extends Component {
    render() {
        const { heading, description } = this.props;

        return (
            <Grommet theme={DASHBOARD_THEME}>
                <Box pad={{ bottom: 'medium', horizontal: 'small', top: 'small'}}
                    gap='medium'>
                    <Box gap='xsmall' margin={{left: 'large'}}>
                        <Heading level={3} color='neutral-5'>
                            {heading}
                        </Heading>
                        <Text>
                            {description}
                        </Text>
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