import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import { Provider } from 'react-redux';
import { HashRouter as Router,Route } from 'react-router-dom';

import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div>
      <Navbar/>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/movie/:id' component={Movie}/>
      <Footer/>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
//test