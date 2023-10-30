import Button from '../button/button';
import { totalPrice } from '../units/total-price';
import './cart.css';

const Cart = ({ cartItems, onCheckout }) => (
  <div className='cart__container'>
    <p>
      Umumiy narx:{" "}
      {totalPrice(cartItems).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </p>

    <Button
      title={`${cartItems.length === 0 ? 'Buyurtma berish' : 'Tolov'}`}
      disable={cartItems.length === 0 ? true : false}
      type={'checkout'}
        onClick={onCheckout}/>
  </div>
);

export default Cart;
