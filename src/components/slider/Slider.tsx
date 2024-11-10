import React from 'react';
import styled from 'styled-components';

export const Slider = () => {
    return (
        <StyledSlider>
            <div>
                <Slide>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div>@ivan ivanow</div>
                </Slide>
            </div>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
}

const StyledSlider = styled.div`
border: 1px solid grey;
max-width: 600px;
display: flex;
flex-direction: column;
align-items: center;
`
const Slide = styled.div`
text-align: center;
`
const Pagination = styled.div`
span {
display: inline-block;
height: 10px;
width: 10px;
background-color: #2f0e0e;
margin: 5px;
}
`