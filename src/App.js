import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WishingStone from './components/wishingStrone/WishingStone';
import Wish from './components/wish/Wish';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className='container'>
            <Routes>
              <Route path='/wishingStone' element={<WishingStone />} />
              <Route path='/wish/:wish' element={<Wish wish='egg' />} />
              <Route path='/wishGetter/:wish' element={routeProps => <Wish wish={routeProps.match.params.wish} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>

  );
}

export default App;
