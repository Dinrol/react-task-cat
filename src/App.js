import React from 'react';
import Package from './components/Package';
import "./css/style.css";

function App() {

  let packageList = [
    { title: 'с фуагра', numberServings: 10, numberMice: null, weight: '0,5', },
    { title: 'с рыбой', numberServings: 40, numberMice: 2, weight: '2', },
    { title: 'с курой', numberServings: 100, numberMice: 5, weight: '5', },
  ]
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="row">
          {
            packageList.map(item => <Package item={item} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
