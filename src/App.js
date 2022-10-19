//stylesheet
import './App.css';

//fonts
import "./fonts/OpenSans-Light.ttf";
import "./fonts/OpenSans-Regular.ttf"
import "./fonts/OpenSans-Medium.ttf"
import "./fonts/OpenSans-SemiBold.ttf"
import "./fonts/OpenSans-Bold.ttf"
import "./fonts/OpenSans-ExtraBold.ttf"


import Login from './components/Login';
import Signup from './components/Signup';



function App() {
  return (
    <div>
    <Login />
    <Signup />
   
    </div>
  );
}

export default App;
