import "./header.styles.scss";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { isHidden } from "../../redux/cart/cart.actions";

const Header = ({ currentUser, isCartHidden, isHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartHidden.hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    isCartHidden: state.isCartHidden,
  };
};

export default connect(mapStateToProps)(Header);
