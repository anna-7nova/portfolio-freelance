import React from 'react';
import { StyledSectionTitle } from '../../../components/StyledSectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import {S} from './Contacts_Styles'

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <StyledSectionTitle>Contact</StyledSectionTitle>
                <S.Form>
                    <S.Field placeholder="name" />
                    <S.Field placeholder="surname" />
                    <S.Field placeholder="message" as={"textarea"} />
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
}