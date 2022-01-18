import { Accordion } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionContainer = styled('section')`
    padding-bottom: ${({theme}) => theme.spacing(7)};
`;

export const Wave = styled('img')`
    height: 100px;
    margin-top: -100px;
    width: 100%;
`;

export const SectionTitle = styled('h2')`
    margin: 0;
    text-align: center;
`;

export const SectionSubtitle = styled('p')`
    margin: ${({theme}) => theme.spacing(2) + ' 0 ' + theme.spacing(10)};
    position: relative;
    text-align: center;

    &::after {
        content: '';
        background-color: ${({theme}) => theme.palette.grey[300]};
        bottom: ${({theme}) => theme.spacing(-5)};
        height: 3px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 96px;
    }
`;

export const AccordionStyled = styled(Accordion)`
    &.MuiAccordion-root {
        border: 2px solid ${({theme}) => theme.palette.primary.main};
        box-shadow: none;

        &::before {
            background-color: transparent;
        }

        &, &.Mui-expanded {
            margin: -2px 0 0;
        }
    }

    .MuiAccordionSummary-content .MuiTypography-root {
        font-weight: bold;
    }

    .MuiAccordionDetails-root {
        padding-right: ${({theme}) => theme.spacing(7)};
    }

    .MuiAccordionSummary-expandIconWrapper {
        color: ${({theme}) => theme.palette.text.secondary};
    }
`;
