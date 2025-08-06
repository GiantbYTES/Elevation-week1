import "./Landing.css";

export function Landing({ name, store }) {
  const hottestItem = store.filter((i) => {
    console.log(i.hottest);
    return i.hottest;
  });
  // console.log(hottestItem);
  return (
    <div className="Landing">
      Welcome, {name}. the hottest item is {hottestItem[0].item} for $
      {hottestItem[0].price}
    </div>
  );
}

export default Landing;
