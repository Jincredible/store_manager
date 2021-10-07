import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {Component} from 'react'
import {Home} from './Home'
import {About} from './About'
import {Employees} from './Employees'
import {Clients} from './Clients'
import {Suppliers} from './Suppliers'
import {Products} from './Products'
import {Sales} from './Sales'
import {NoMatch} from './NoMatch'
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron'
class App extends Component{
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path = "/" component={Home}/>
              <Route path = "/about" component={About}/>
              <Route path = "/employees" component={Employees}/>
              <Route path = "/clients" component={Clients}/>
              <Route path = "/suppliers" component={Suppliers}/>
              <Route path = "/products" component={Products}/>
              <Route path = "/sales" component={Sales}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
