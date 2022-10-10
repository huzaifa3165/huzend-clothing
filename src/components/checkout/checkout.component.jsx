import "./checkout.styles.scss";
import {
  selectCartItems,
  selectCartPriceCount,
} from "../../redux/cart/cart.reselect";
import { connect } from "react-redux";
import CheckoutItem from "../checkout-item/checkout-item.component";
import StripeCheckoutButton from "../stripe-button/stripe-button.component";

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className="test-warning">
        Please use the following details to test payments
        <br />
        4242 4242 4242 4242 - Exp: 12/34 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    totalPrice: selectCartPriceCount(state),
  };
};

export default connect(mapStateToProps)(Checkout);
