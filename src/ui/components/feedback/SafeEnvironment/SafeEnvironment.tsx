import React from 'react';
import {SafeEnvironmentContainer} from './SafeEnvironment.style'
import { Container } from '@mui/material'

const SafeEnvironment = () => {
    return (
        <Container>
        <SafeEnvironmentContainer>
            Ambiente 100% seguro <i className={'twf-lock'} />
        </SafeEnvironmentContainer>
        </Container>
    ) 
}

export default SafeEnvironment; 