import "./collection-item.styles.scss";
import { addToCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import {
  StyleColletionItem,
  StyleImage,
  StyleCollectionFooter,
  StyleName,
  StylePrice,
  StyleButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;
  const handleClick = () => {
    addToCart(item);
  };
  return (
    <StyleColletionItem>
      <StyleImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></StyleImage>
      <StyleCollectionFooter>
        <StyleName>{name}</StyleName>
        <StylePrice>{price}</StylePrice>
      </StyleCollectionFooter>
      <StyleButton className="custom-button" inverted onClick={handleClick}>
        ADD TO CART
      </StyleButton>
    </StyleColletionItem>
  );
};

const mapDipatchToProps = (dispatch) => {
  return {
    addToCart: (itemObj) => dispatch(addToCart(itemObj)),
  };
};

export default connect(null, mapDipatchToProps)(CollectionItem);
