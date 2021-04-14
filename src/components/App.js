import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import ExercisesConstainer from './../pages/ExercisesConstiner'
import ExercisesNewContainer from '../pages/ExercisesNewContainer'
import NotFound from './../pages/404'
import Example from './Example'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/exercise" component={ExercisesConstainer} />
      <Route exact path="/exercise/new" component={ExercisesNewContainer} />
      <Route exact path="/example" component={Example} />
      <Route exact path="/" component={ExercisesConstainer} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App