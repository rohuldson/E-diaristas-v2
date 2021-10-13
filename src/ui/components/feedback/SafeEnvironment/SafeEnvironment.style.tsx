import { styled } from '@mui/material/styles';

export const SafeEnvironmentContainer = styled('div')`
    font-size: 12px;
    color:  ${({ theme }) => theme.palette.text.secondary};
    background-color: ${({ theme }) => theme.palette.background.default};
    text-align: right;
    padding: ${({ theme }) => theme.spacing(2)} 0;


`;

