import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { Home } from "./component/Home"
import { User } from "./component/User"
import { Company } from "./component/Company"
import { Contact } from "./component/Contact"
import { NotFound } from "./component/NotFound"


function App() {
  return (
    <>
    <Router>
      <Navbar/> 
    <div className="menu">
    <Switch>
    
      <Route exact path="/" component={Home}/>
      <Route exact path="/User" component={User}/>
      <Route exact path="/Company" component={Company}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route component={NotFound}/>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
