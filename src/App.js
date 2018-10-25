import React, { Component } from 'react';
import './App.css';
import CatFoodCatalog from './CatFoodCatalog'

const items = [];

items[0] = { typeName: 'с фуа-гра',text: 'Печень утки разварная с артишоками.', weight: '0,5', disabled: false, endText:'Печалька, с фуа-гра закончился.'};
items[1] = { typeName: 'с рыбой',text: 'Головы щучьи с чесноком да свежайшая сёмгушка.', weight: '2', disabled: false, endText:'Печалька, с рыбой закончился.'};
items[2] = { typeName: 'с курой',text: 'Филе из цыплят с трюфелями в бульоне.', weight: '5', disabled: true, endText:'Печалька, с курой закончился.'};

class App extends Component {
  render() {

    return (
      <div className='content'>
        <header>
          <h1 className='header-text'>Ты сегодня покормил кота?</h1>
        </header>
        <CatFoodCatalog items={items} />
      </div>
    );
  }
}

export default App;