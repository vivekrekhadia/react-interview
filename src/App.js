import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./component/Home'));
const Company = React.lazy(() => import('./component/Company'));
const User = React.lazy(() => import('./component/User'));
const NotFound = React.lazy(() => import('./component/NotFound'));
const Contact = React.lazy(() => import('./component/Contact'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='menu'>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/User' component={User} />
              <Route exact path='/Company' component={Company} />
              <Route exact path='/Contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;