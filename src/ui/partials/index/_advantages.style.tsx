import { styled } from "@mui/material/styles";
import { List, ListItemText, Avatar, Divider } from "@mui/material";

export const GradientBackground = styled('section')`
    background: ${({theme}) => 'linear-gradient(180deg, ' + theme.palette.secondary.main + ' 0%, ' + theme.palette.primary.main + ' 100%)'};
    color: ${({theme}) => theme.palette.primary.contrastText};
    padding-bottom: ${({theme}) => theme.spacing(20)};
`;

export const SectionTitle = styled('h2')`
    font-size: ${({theme}) => theme.typography.h6.fontSize};
    font-weight: normal;
    margin: 0;
    padding: ${({theme}) => theme.spacing(7) + ' 0 ' + theme.spacing(4)};
    position: relative;
    text-align: center;

    &::after {
        content: '';
        background-color: currentColor;
        bottom: ${({theme}) => theme.spacing(2)};
        height: 2px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 44px;
    }

    ${({theme}) => theme.breakpoints.up('md')} {
        font-size: ${({theme}) => theme.typography.h5.fontSize};
        padding: ${({theme}) => theme.spacing(15) + ' 0 ' + theme.spacing(13)};

        &::after {
            bottom: ${({theme}) => theme.spacing(10)};
        }
    }
`;

export const ListStyled = styled(List)`
    ${({theme}) => theme.breakpoints.up('md')} {
        display: grid;
        gap: ${({theme}) => theme.spacing(7)};
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
`;

export const ListItemTextStyled = styled(ListItemText)`
    .MuiListItemText-primary {
        font-weight: bold;
    }
    
    .MuiListItemText-secondary {
        color: currentColor;
    }
`;

export const AvatarStyled = styled(Avatar)`
    background-color: transparent;
    border: 2px solid currentColor;
    box-sizing: content-box;
    margin-right: ${({theme}) => theme.spacing(2)};
    padding: 2px;

    i {
        font-size: 25px;
    }
    
    ${({theme}) => theme.breakpoints.up('md')} {
        margin-right: ${({theme}) => theme.spacing(4)};
        padding: 20px;
        
        i {
            font-size: 50px;
        }
    }
`;

export const ListDivider = styled(Divider)`
    &.MuiDivider-root {
        border-color: rgba(255, 255, 255, .25);
    }

    ${({theme}) => theme.breakpoints.up('md')} {
        display: none;
    }
`;
