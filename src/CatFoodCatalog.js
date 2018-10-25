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

    ProductSelected(id, type) {
        const SelectedId = this.state.catFoodSelected;
        if (type === 'Selected') {
            SelectedId.push(id)
        }
        else {
            let index = SelectedId.indexOf(id)
            SelectedId.splice(index, 1);
        }
        this.setState({
                catFoodSelected: SelectedId
            })
    }

    GetProduct() {
        
        return this.props.items.map((item) => {
            if (item.disabled) {
                return (
                    <div key={item.typeName} className='productUnit'>
                        <div className='product endProduct'>
                            <div className='productText'>
                                <p className='slogan'>Сказочное заморское яство</p>
                                <h2>Нямушка</h2>
                                <h3>{item.typeName}</h3>
                                <p className='productPromo'><GetPromoText weight={item.weight} /></p>
                            </div>
                            <div className='weightCircle'><p className='weightNumber'>{item.weight}</p><br /><p className='weightUnit'>кг</p></div>
                        </div>
                        <div className='endProductInfo'>
                            {item.endText}
                        </div>
                    </div>
                );
            }
            if (this.state.catFoodSelected.includes(item.typeName)) {
                return (
                    <div key={item.typeName} className='productUnit' >
                        <div className='product Selected' onClick={() => { this.ProductSelected(item.typeName) }}>
                            <div className='productText'>
                                <p className='sloganHover'>Котэ не одобряет?</p>
                                <p className='slogan'>Сказочное заморское яство</p>
                                <h2>Нямушка</h2>
                                <h3>{item.typeName}</h3>
                                <p className='productPromo'><GetPromoText weight={item.weight} /></p>
                            </div>
                            <div className='weightCircle'><p className='weightNumber'>{item.weight}</p><br /><p className='weightUnit'>кг</p></div>
                        </div>
                        <div className='productInfo'>
                            {item.text}
                        </div>
                    </div>
                );
            }
            return (
                <div key={item.typeName} className='productUnit'>
                    <div className='product notSelected' onClick={() => { this.ProductSelected(item.typeName, 'Selected') }}>
                        <div className='productText'>
                            <p className='slogan'>Сказочное заморское яство</p>
                            <h2>Нямушка</h2>
                            <h3>{item.typeName}</h3>
                            <p className='productPromo'><GetPromoText weight={item.weight} /></p>
                        </div>
                        <div className='weightCircle'><p className='weightNumber'>{item.weight}</p><br /><p className='weightUnit'>кг</p></div>
                    </div>
                    <div className='productInfo'>
                        Чего сидишь? Порадуй котэ, <span className='buy' onClick={() => { this.ProductSelected(item.typeName, 'Selected') }}>купи.</span>
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