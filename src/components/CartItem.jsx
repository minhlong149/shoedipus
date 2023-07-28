export default function CartItem({
  product,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const { name, image, description, price, color, quantity } = product;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={name} />
      <p>{quantity}</p>
      <button onClick={() => removeFromCart(product)}>Remove from cart</button>
      <button
        onClick={() => decreaseQuantity(product)}
        disabled={quantity === 1}
      >
        -
      </button>
      <button onClick={() => increaseQuantity(product)}>+</button>
    </div>
  );
}
