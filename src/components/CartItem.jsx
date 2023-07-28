export default function CartItem({ product }) {
  const { name, image, description, price, color, quantity } = product;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={name} />
      <p>{quantity}</p>
    </div>
  );
}