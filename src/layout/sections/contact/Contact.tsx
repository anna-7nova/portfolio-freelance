import React from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import styled from 'styled-components';
import { Button } from '../../../components/Button';

export const Contact = () => {
    return (
        <StyledContact>
            <StyledSectionTitle>Contact</StyledSectionTitle>
            <StyledForm>
                <Field placeholder="name" />
                <Field placeholder="surname" />
                <Field placeholder="message" as={"textarea"} />
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
}

const StyledContact = styled.section`
background-color: #f1e4d6;
min-height: 30vh;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const Field = styled.input`
margin: 5px;
width: 50vw;
`