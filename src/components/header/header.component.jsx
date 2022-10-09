import "./header.styles.scss";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.reselect";
import { selectCartHidden } from "../../redux/cart/cart.reselect";

const Header = ({ currentUser, isCartHidden }) => {
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
      {isCartHidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    isCartHidden: selectCartHidden(state),
  };
};

export default connect(mapStateToProps)(Header);
