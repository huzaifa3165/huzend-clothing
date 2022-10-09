import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {console.log(cartItems)}
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cartItems: state.cartReducer.cartItems };
};

export default connect(mapStateToProps)(CartDropDown);
