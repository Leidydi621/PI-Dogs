import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage'
import Home from './components/home/Home'
// import DogCreate from './components/dogCreate/DogCreate'
// import Detail from './components/details/DogDetails'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route path= '/home' component= {Home}/>
        {/* <Route path= '/dog' component= {DogCreate}/>
        <Route path= '/detail/:id' component= {Detail}/> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
