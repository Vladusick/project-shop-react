function BasketItem(props) {
  const {
    offerId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {displayName} x{quantity} = {price.regularPrice * quantity} руб
      <span className="secondary-content">
        <i
          onClick={() => removeFromBasket(offerId)}
          className="material-icons basket-delete"
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
