//Ex1
// function App() {
//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 },
//   ];
//   const showCompany = (name, revenue) => {
//     return (
//       <div id={name}>
//         {name} makes ${revenue} every year
//       </div>
//     );
//   };
//   debugger;
//   return (
//     <div className="ex-space">
//       <h4 className="ex-title">Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map((c) => showCompany(c.name, c.revenue))}
//       </div>
//     </div>
//   );
// }

//Ex2
function App() {
  const getClassName = (temperature) => {
    let classWeather = "";
    if (temperature < 15) {
      classWeather = "freezing";
    } else if (temperature < 30) {
      classWeather = "fair";
    } else {
      classWeather = "hell-scape";
    }
    return <div id="weatherBox" className={classWeather}></div>;
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {getClassName(0)}
        {getClassName(20)}
        {getClassName(40)}
      </div>
    </div>
  );
}

export default App;
