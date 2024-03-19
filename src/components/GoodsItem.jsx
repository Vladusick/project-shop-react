function GoodsItem(props) {
  const {
    offerId,
    displayName,
    displayType,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={displayAssets[0].full_background}
          alt={displayName}
          onError={(event) => (event.target.style.display = "none")}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
        <br />
        <p style={{ textAlign: "right" }}>{displayType}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ offerId, displayName, price })}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
