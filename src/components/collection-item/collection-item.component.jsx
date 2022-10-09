import "./collection-item.styles.scss";
import Button from "../button/button.component";
import { addToCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;
  const handleClick = () => {
    addToCart(item);
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={handleClick}>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDipatchToProps = (dispatch) => {
  return {
    addToCart: (itemObj) => dispatch(addToCart(itemObj)),
  };
};

export default connect(null, mapDipatchToProps)(CollectionItem);
