import react, { Component } from "react";
import Loading from "./Modules/Loading";
import Navigation from "./Modules/Navigation";
import NewsSection from "./Modules/NewsSection";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <>
        
        <Router>
        <Navigation />
          <Switch>
            <Route exact path='/' element={<NewsSection key="general" country="us" category="general" pageSize={5} />} />
            <Route exact path='/business' element={<NewsSection key="business" country="us" category="business" pageSize={5} />} />
            <Route exact path='/entertainment' element={<NewsSection key="entertainment" country="us" category="entertainment" pageSize={5} />} />
            <Route exact path='/health' element={<NewsSection key="health" country="us" category="health" pageSize={5} />} />
            <Route exact path='/science' element={<NewsSection key="science" country="us" category="science" pageSize={5} />} />
            <Route exact path='/sports' element={<NewsSection key="sports" country="us" category="sports" pageSize={5} />} />
            <Route exact path='/technology' element={<NewsSection key="technology" country="us" category="technology" pageSize={5} />} />
          </Switch>

        </Router>



      </>
    );
  }
}
