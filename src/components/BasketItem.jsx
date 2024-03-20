function BasketItem(props) {
  const {
    offerId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {displayName}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(offerId)}
      >
        remove
      </i>{" "}
      x{quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(offerId)}
      >
        add
      </i>{" "}
      = {price.regularPrice * quantity}
      руб
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
