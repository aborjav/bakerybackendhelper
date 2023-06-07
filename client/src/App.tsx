import React from 'react';
import Header from './components/Header/Header';
import DoughiOrFlourQuantity from './components/DoughInput/DoughInput';

const App: React.FC = () =>{  
  return (
    <div className="App">
      <Header />
      <DoughiOrFlourQuantity />
      {/* Other components go here */}
    </div>
  );
}
export default App;
