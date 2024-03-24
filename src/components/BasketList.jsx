import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <div className="basket-list">
      <ul className="collection">
        <li className="collection-item active">Корзина</li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.offerId}
              {...item}
              removeFromBasket={removeFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          ))
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item active">
          Общая стоимость: {totalPrice} руб
        </li>
        <li className="collection-item">
          <button className="btn btn-small">Оформить</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
}

export { BasketList };
