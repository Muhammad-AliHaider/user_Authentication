import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the Best Brands!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/men.jpg'
              text='Get the Advice, listen to your gut.'
              label='MEN'
              path='/services'
            />
            <CardItem
              src='images/women.jpg'
              text='Dont be fooled'
              label='WOMEN'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/kids.jpg'
              text='Like Parent Like Child'
              label='KIDS'
              path='/services'
            />
            <CardItem
              src='images/nike.jpg'
              text='Just Do It'
              label='SPORTS'
              path='/products'
            />
            <CardItem
              src='images/loafer.jpg'
              text='Unleash your wild side'
              label='LOAFER'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
