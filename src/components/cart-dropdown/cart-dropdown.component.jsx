import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {console.log(cartItems)}
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cartItems: state.cartReducer.cartItems };
};

export default connect(mapStateToProps)(CartDropDown);
