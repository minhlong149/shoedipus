import minusIcon from "../assets/minus.png";
import plusIcon from "../assets/plus.png";
import trashIcon from "../assets/trash.png";

export default function CartItem({
  product,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const { name, image, price, color, quantity } = product;
  return (
    <article className="cart-item">
      <img src={image} className="cart-item-image" alt={name} />
      <h2 className="cart-item-name">{name}</h2>
      <p className="cart-item-price">{price}</p>
      <div className="cart-item-quantity-wrapper">
        <button
          onClick={() => decreaseQuantity(product)}
          disabled={quantity === 1}
          className="cart-item-icon-wrapper cart-item-icon-wrapper__accent"
        >
          <img
            src={minusIcon}
            className="cart-item-icon"
            alt="decrease-icon-button"
          />
        </button>
        <span className="cart-item-quantity">{quantity}</span>
        <button
          onClick={() => increaseQuantity(product)}
          className="cart-item-icon-wrapper cart-item-icon-wrapper__accent"
        >
          <img
            src={plusIcon}
            className="cart-item-icon"
            alt="increase-icon-button"
          />
        </button>
      </div>
      <button
        className="cart-item-remove cart-item-icon-wrapper cart-item-icon-wrapper__primary"
        onClick={() => removeFromCart(product)}
      >
        <img
          src={trashIcon}
          className="cart-item-icon"
          alt="remove-icon-button"
        />
      </button>
    </article>
  );
}
