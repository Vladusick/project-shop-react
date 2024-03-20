function BasketItem(props) {
  const { offerId, displayName, price, quantity } = props;
  return (
    <li className="collection-item">
      {displayName} x{quantity} = {price.regularPrice}
      <span className="secondary-content">
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
