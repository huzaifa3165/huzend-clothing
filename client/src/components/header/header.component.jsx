import {
  StyleHeaderContainer,
  StyleLogoContainer,
  StyleOptionLink,
  StyleOptions,
} from "./header.styles";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.reselect";
import { selectCartHidden } from "../../redux/cart/cart.reselect";

const Header = ({ currentUser, isCartHidden }) => {
  return (
    <StyleHeaderContainer>
      <StyleLogoContainer to="/">
        <Logo className="logo" />
      </StyleLogoContainer>
      <StyleOptions>
        <StyleOptionLink to="/shop">SHOP</StyleOptionLink>
        <StyleOptionLink to="/contact">CONTACT</StyleOptionLink>
        {currentUser ? (
          <StyleOptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </StyleOptionLink>
        ) : (
          <StyleOptionLink to="/signin">SIGN IN</StyleOptionLink>
        )}
        <CartIcon />
      </StyleOptions>
      {isCartHidden ? null : <CartDropDown />}
    </StyleHeaderContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    isCartHidden: selectCartHidden(state),
  };
};

export default connect(mapStateToProps)(Header);
