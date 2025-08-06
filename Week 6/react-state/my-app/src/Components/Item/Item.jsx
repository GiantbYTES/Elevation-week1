import "./Item.css";

export function Item({ item, name, shouldDiscount }) {
  {
    console.log("item: " + item);
    console.log("shouldDiscount: " + shouldDiscount);
  }
  return (
    <div className="Item" id={name}>
      {item.item}: $
      {shouldDiscount ? parseInt(item.price * (1 - item.discount)) : item.price}
    </div>
  );
}

export default Item;
