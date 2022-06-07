import React from 'react';
import './styles/shoplist.css';

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h3>Shopping List for <b className='guy-name'>{this.props.name}</b></h3>
          <ul className="shop-ul">
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }

export default ShoppingList;
