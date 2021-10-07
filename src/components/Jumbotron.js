import React from 'react';
import {Container} from 'react-bootstrap'
import styled from 'styled-components'
import ImageHeaderCoffee from '../assets/header01coffeecup.jpg'

const Styles = styled.div`
  .jumbo {
    backgroundImage: url(${ImageHeaderCoffee}) no-repeat fixed bottom;
    bacground-size: cover;
    color: #ccc;
    height: 00px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
//todo! need to check why the background image isn't working
export const Jumbotron = () => (
    <Styles>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="bg-image" className="jumbo"> 
        </div>
      </div>
    </Styles>
)

