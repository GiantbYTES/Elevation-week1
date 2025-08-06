import "./Home.css";
import Item from "../Item/Item";

export function Home({ store, shouldDiscount }) {
  return (
    <div className="Home">
      <h4>Store</h4>
      {console.log("should discount:" + shouldDiscount)}
      {store.map((i) => {
        return <Item item={i} key={i.item} shouldDiscount={shouldDiscount} />;
      })}
    </div>
  );
}

export default Home;
