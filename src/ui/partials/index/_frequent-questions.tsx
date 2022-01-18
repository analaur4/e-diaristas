import { useState } from "react";
import { AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import { AccordionStyled, SectionContainer, SectionSubtitle, SectionTitle, Wave } from "./_frequent-questions.style";

const questionList = [
    {
        question: 'Dúvida 1',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident quo numquam, vel perspiciatis beatae sed alias blanditiis suscipit quia sunt nobis dolor tenetur quisquam aperiam error quis distinctio ea.'
    },
    {
        question: 'Dúvida 2',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident quo numquam, vel perspiciatis beatae sed alias blanditiis suscipit quia sunt nobis dolor tenetur quisquam aperiam error quis distinctio ea.'
    },
    {
        question: 'Dúvida 3',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident quo numquam, vel perspiciatis beatae sed alias blanditiis suscipit quia sunt nobis dolor tenetur quisquam aperiam error quis distinctio ea.'
    },
    {
        question: 'Dúvida 4',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident quo numquam, vel perspiciatis beatae sed alias blanditiis suscipit quia sunt nobis dolor tenetur quisquam aperiam error quis distinctio ea.'
    }
]

const FrequentQuestions = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    function isOpen(accordionNumber: number): boolean {
        return activeAccordion === accordionNumber;
    }

    function changeOpenAccordion(accordionNumber: number) {
        if(isOpen(accordionNumber)){ 
            setActiveAccordion(0);
        } else {
            setActiveAccordion(accordionNumber);
        }
    }

    function getIcon(accordionNumber: number) {
        return isOpen(accordionNumber) ? 'twf-minus' : 'twf-plus';
    }

    return <SectionContainer>
        <Wave src={'/img/home/waves.svg'} />
        <Container>
            <SectionTitle>Ainda está com dúvidas?</SectionTitle>
            <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>

            {questionList.map((item, index) => (
                <AccordionStyled key={index} expanded={isOpen(index + 1)} onChange={() => changeOpenAccordion(index + 1)}>
                    <AccordionSummary expandIcon={<i className={getIcon(index + 1)} />}>
                        <Typography color={'primary'}>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>{item.answer}</AccordionDetails>
                </AccordionStyled>
            ))}
        </Container>
    </SectionContainer>
}

export default FrequentQuestions;
