import React, { Component } from 'react';
import './CatFoodCatalog.css';
import GetPromoText from './GetPromoText'

class CatFoodCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catFoodSelected: []
        }
    }

    ProductSelected(id) {
        const SelectedId = this.state.catFoodSelected;
        if (SelectedId.indexOf(id) !== -1) {
            let index = SelectedId.indexOf(id)
            SelectedId.splice(index, 1);
        }
        else {
            SelectedId.push(id)
        }
        this.setState({
            catFoodSelected: SelectedId
        })
    }

    GetProductContent(item, classProduct) {
        return (
            <div className={`product ${classProduct}`} onClick={() => { if (!item.disabled) { this.ProductSelected(item.typeName) } }}>
                <div className='productText'>
                    <p className='sloganHover'>Котэ не одобряет?</p>
                    <p className='slogan'>Сказочное заморское яство</p>
                    <h2>Нямушка</h2>
                    <h3>{item.typeName}</h3>
                    <p className='productPromo'><GetPromoText weight={item.weight} /></p>
                </div>
                <div className='weightCircle'><p className='weightNumber'>{item.weight}</p><br /><p className='weightUnit'>кг</p></div>
            </div>
        )
    }

    GetProduct() {

        return this.props.items.map((item) => {
            if (item.disabled) {
                return (
                    <div key={item.typeName} className='productUnit'>
                        {this.GetProductContent(item, 'endProduct')}
                        <div className='endProductInfo'>
                            {item.endText}
                        </div>
                    </div>
                );
            }
            if (this.state.catFoodSelected.indexOf(item.typeName) !== -1) {
                return (
                    <div key={item.typeName} className='productUnit' >
                        {this.GetProductContent(item, 'Selected')}
                        <div className='productInfo'>
                            {item.text}
                        </div>
                    </div >
                );
            }
            return (
                <div key={item.typeName} className='productUnit' >
                    {this.GetProductContent(item, 'notSelected')}
                    <div className='productInfo'>
                        Чего сидишь? Порадуй котэ, <span className='buy' onClick={() => { this.ProductSelected(item.typeName) }}>купи.</span>
                    </div>
                </div>
            );
        })
    };


    render() {
        return (
            <div className='itemView'>
                {this.GetProduct()};
            </div>
        );
    }
}
export default CatFoodCatalog;