import React from 'react';
import {S} from './Slider_Styles'

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <div>
                <S.Slide>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div>@ivan ivanow</div>
                </S.Slide>
            </div>
            <S.Pagination>
                <span> </span>
                <span className='active'> </span>
                <span> </span>
            </S.Pagination>
        </S.Slider>
    );
}

