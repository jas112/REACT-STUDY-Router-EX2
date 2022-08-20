import { Route, Switch } from 'react-router-dom';
import PrimateHeader from './components-primates/primateHeader/PrimateHeader';
import PrimateHome from './components-primates/primateHome/PrimateHome';
import PrimateList from './components-primates/primateList/PrimateList';
import Primate from './components-primates/primate/Primate';
import './App.css';

// import Header from './components/header/Header';
// import Home from './components/home/Home';
// import WishingStone from './components/wishingStrone/WishingStone';
// import Wish from './components/wish/Wish';
// import DualWish from './components/dualWish/DualWish';

function App() {
  return (

        <div className="App">

          {/* Prelim Exercise...BEGIN */}
          {/* <Header /> */}
          {/* <div className='container'> */}
            {/* <Switch> */}
              {/* <Route exact path='/' render={() => <Home />} /> */}
              {/* <Route exact path='/wishingStone' render={routeProps => <WishingStone {...routeProps} />} /> */}
              {/* <Route exact path='/wish/:wish' render={routeProps => <Wish {...routeProps} />} /> */}
              {/* <Route exact path='/dualWish/firstWish/:wish1/secondWish/:wish2' render={routeProps => <DualWish {...routeProps} />} /> */}
              {/* <Route render={() => <h1>ERROR PAGE NOT FOUND!!!</h1>} /> */}
            {/* </Switch> */}
          {/* </div> */}
          {/* Prelim Exercise...END */}

          {/* Primate Support Exercise...BEGIN */}
          {/* <div className='display-1'>PrimateSupport</div> */}
          <PrimateHeader />
          <div className='container-primateSupport'>
          <Switch>
            <Route exact path='/' render={() => <PrimateHome />} />
            <Route exact path='/primateList' render={() => <PrimateList />} />
            <Route exact path='/primate/:primate' render={routeProps => <Primate {...routeProps} />} />
            <Route render={() => <h1>ERROR PAGE NOT FOUND!!!</h1>} />
          </Switch>
          </div>
          {/* Primate Support Exercise...END */}

        </div>

  );
}

export default App;
