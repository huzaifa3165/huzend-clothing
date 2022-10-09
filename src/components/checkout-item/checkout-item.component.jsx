import "./checkout-item.styles.scss";
import {
  addToCart,
  decrementFromCart,
  removeFromCart,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({
  cartItem,
  removeFromCart,
  decrementFromCart,
  addToCart,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      {console.log(cartItem)}
      <div
        className="remove-button"
        onClick={() => {
          removeFromCart(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (cartItem) => dispatch(removeFromCart(cartItem)),
    decrementFromCart: (cartItem) => dispatch(decrementFromCart(cartItem)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
