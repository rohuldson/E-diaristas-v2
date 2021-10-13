
import React from 'react';
import {PageTitleContainer, PageTitleStyled, PagSubTitleStyled} from './PageTitle.style';
import { Container } from '@mui/material'

interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}


const PageTitle: React.FC<PageTitleProps> = (props) => {

    return (
        
        <Container>
            <PageTitleContainer>
                <PageTitleStyled>
                {props.title}
                </PageTitleStyled>
                <PagSubTitleStyled>
                {props.subtitle}
                </PagSubTitleStyled>
            </PageTitleContainer>
        </Container>
  
     );
}

export default PageTitle ;