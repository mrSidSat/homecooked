// import Profile from './components/Profile/Profile';
// import './App.css';
import SellDash from './components/sellComponent';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/mainComponent';
import '../node_modules/popper.js/dist/popper.min.js'
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
