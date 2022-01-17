import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link, { LinkProps } from "ui/components/navigation/Link/Link";
import RoundedButton from "ui/components/inputs/RoundedButton/RoundedButton";

export const SectionContainer = styled('section')`
    position: relative;
    background-image: url('/img/home/living-room.svg');
    background-position: right center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 250px;

    ${({theme}) => theme.breakpoints.down('md')} {
        display: flex;
        text-align: center;
    }

    ${({theme}) => theme.breakpoints.up('md')} {
        background-position: center;
    }
`;

export const ContainerStyled = styled(Container)`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 'title' 'description' 'button';

    ${({theme}) => theme.breakpoints.down('md')} {
        align-content: center;
        max-width: 350px;
    }

    ${({theme}) => theme.breakpoints.up('md')} {
        align-content: center;
        align-items: center;
        gap: ${({theme}) => theme.spacing(4)};
        grid-template-areas: 'title picture'
                            'description picture'
                            'button picture';
        grid-template-columns: 450px minmax(200px, 450px);
        grid-template-rows: 125px 55px 60px;
        justify-content: space-between;
        justify-items: center;
        min-height: 450px;
    }
`;

export const SectionTitle = styled('h1')`
    grid-area: title;
    margin: 0;
    position: relative;

    em {
        font-style: inherit;
    }

    .twf-search {
        background-color: ${({theme}) => theme.palette.grey[200]};
        border-radius: 50px;
        padding: ${({theme}) => theme.spacing(2)};
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(25%, -25%);
    }

    ${({theme}) => theme.breakpoints.down('md')} {
        font-size: ${({theme}) => theme.typography.body1.fontSize};
        font-weight: normal;

        .twf-search {
            display: none;
        }
    }
    
    ${({theme}) => theme.breakpoints.up('md')} {
        border: 4px solid ${({theme}) => theme.palette.grey[200]};
        border-radius: 65px;
        line-height: 30px;
        padding: ${({theme}) => theme.spacing(4) + ' ' + theme.spacing(8)};

        em {
            color: ${({theme}) => theme.palette.primary.main};
        }
    }
`;

export const SectionDescription = styled('p')`
    grid-area: description;

    ${({theme}) => theme.breakpoints.down('md')} {
        margin: 0 0 ${({theme}) => theme.spacing(5)};
    }
    
    ${({theme}) => theme.breakpoints.up('md')} {
        width: 350px;
    }
`;

export const SectionButton = styled((props: LinkProps) => <Link Component={RoundedButton} {...props} />)`
    grid-area: button;

    ${({theme}) => theme.breakpoints.up('md')} {
        height: 100%;
        width: 405px;
    }
`;

export const SectionPictureContainer = styled('div')`
    grid-area: picture;
    position: relative;

    img {
        position: relative;
        top: 35px;
        width: 100%;
    }

    &::before, &::after {
        content: '';
        border-radius: 100%;
        position: absolute;
    }

    &::before {
        background-color: ${({theme}) => theme.palette.primary.main};
        height: 130px;
        right: -5%;
        top: 20%;
        width: 130px;
        z-index: 2;
    }

    &::after {
        background-color: ${({theme}) => theme.palette.grey[200]};
        bottom: 0;
        height: 40px;
        right: 0;
        width: 40px;
    }

    ${({theme}) => theme.breakpoints.down('md')} {
        display: none;
    }
`;

export const BottomButton = styled('span')`
    background-color: ${({theme}) => theme.palette.primary.main};
    border: 5px solid currentColor;
    border-radius: 50px;
    bottom: 0;
    color: ${({theme}) => theme.palette.common.white};
    left: 50%;
    padding: 11px 12px;
    position: absolute;
    transform: translate(-50%, 50%);

    i {
        left: -2px;
        position: relative;
    }
`;
