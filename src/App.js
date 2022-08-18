// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route } from 'react-router-dom';
import WishingStone from './components/wishingStrone/WishingStone';
import Wish from './components/wish/Wish';
import './App.css';

function App() {
  return (

        <div className="App">
          <div className='container'>
              <Route path='/wishingStone' render={() => <WishingStone />} />
              <Route path='/wish/:wish' render={() => <Wish wish='egg' />} />
              <Route path='/wishGetter/:wish' render={() => <Wish />} />
          </div>
        </div>

  );
}

export default App;
