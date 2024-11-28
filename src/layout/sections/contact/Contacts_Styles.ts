import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Contact = styled.section`

`
const Form = styled.form`
max-width: 540px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
margin: 0 auto;

textarea {
min-height: 155px;
resize: none;
}

@media ${theme.media.mobile} {
    padding-top: 30px;
}
`
const Field = styled.input`
width: 100%;
border: 1px solid ${theme.colors.borderColor};
height: 32px;
background-color: ${theme.colors.secondaryBg};

padding: 7px 15px;
font-family: "Poppins", sans-serif;
font-weight: 400;
font-size: 12px;
letter-spacing: 0.05em;
color: ${theme.colors.font};

&:focus-visible {
outline: 1px solid ${theme.colors.borderColor};
}

&::placeholder{
color: ${theme.colors.placeholderColor};
text-transform: capitalize;
}
`

export const S = {
    Contact,
    Form,
    Field
}