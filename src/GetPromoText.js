import React from 'react';
import './GetPromoText.css';

function  GetPromoText(props) {

    if (props.weight === '0,5') {
        return (
            <span className='productPromo'>
                <b>10</b> порций мышь в подарок
            </span>
        );
    }
    if (props.weight === '2') {
        return (
            <span className='productPromo'>
                <b>40</b> порций <b>2</b> мыши в подарок
            </span>
        );
    }
    return (
        <span className='productPromo'>
            <b>100</b> порций <b>5</b> мышей в подарок заказчик доволен
        </span>
    )
}

export default GetPromoText;