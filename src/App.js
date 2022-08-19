// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import WishingStone from './components/wishingStrone/WishingStone';
import Wish from './components/wish/Wish';
import DualWish from './components/dualWish/DualWish';
import './App.css';

function App() {
  return (

        <div className="App">
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' render={() => <Home />} />
              <Route exact path='/wishingStone' render={() => <WishingStone />} />
              <Route exact path='/wish/:wish' render={routeProps => <Wish {...routeProps} />} />
              <Route exact path='/dualWish/firstWish/:wish1/secondWish/:wish2' render={routeProps => <DualWish {...routeProps} />} />
              {/* <Route exact path='/wishGetter/:wish' render={() => <Wish />} /> */}
            </Switch>
          </div>
        </div>

  );
}

export default App;
