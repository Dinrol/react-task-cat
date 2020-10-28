import React from 'react';
import Package from './components/Package';
import "./css/style.css";

function App() {

  let packageList = [
    {
      id: 0, title: 'с фуагра', numberServings: 10, numberMice: null,
      weight: '0,5', noteSelected: "Печень утки разварная с артишоками.", noteDisabled: 'Печалька, с фуа-гра закончился.'
    },
    {
      id: 1, title: 'с рыбой', numberServings: 40, numberMice: 2,
      weight: '2', noteSelected: "Головы щучьи с чесноком да свежайшая сёмгушка.", noteDisabled: 'Печалька, с рыбой закончился.'
    },
    {
      id: 2, title: 'с курой', numberServings: 100, numberMice: 5,
      weight: '5', noteSelected: "Филе из цыплят с трюфелями в бульоне.", noteDisabled: 'Печалька, с курой закончился.'
    },
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
