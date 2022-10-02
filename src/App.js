//stylesheet
import './App.css';

//fonts
import "./fonts/Roboto-Thin.ttf";
import "./fonts/Roboto-Regular.ttf"
import "./fonts/Roboto-Medium.ttf"
import "./fonts/Roboto-Light.ttf"
import "./fonts/Roboto-Bold.ttf"
import "./fonts/Roboto-Black.ttf"

import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <div>
    <Signup />
    <Login />
    </div>
  );
}

export default App;
