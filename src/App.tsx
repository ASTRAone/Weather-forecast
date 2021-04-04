import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MenuBtns from './Components/MenuBtns';
import WeatherDisplay from './Components/WeatherDisplay/index';

const App: React.FC = () => {

  const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
  ];

  const [activePlace, setActivePalce] = useState(0);

  // Изменение активной кнопки
  const changeActivBtn = (index: number) => {
    setActivePalce(index);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="App-our">
        <div className="container">
          <div className="App-content">
            <MenuBtns 
              arrInfo={PLACES}
              changeActive={changeActivBtn} />

            <WeatherDisplay 
              zip={PLACES[activePlace].zip}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
