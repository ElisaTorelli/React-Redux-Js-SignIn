import { useSelector } from 'react-redux';
import './App.css';
import SignInCard from './components/SignIn/SignInCard'
import LogInCard from './components/LogIn/LogInCard';


function App() {

  // const {signin} = useSelector((store) => store)
  
  return (
    <div className="App">
      {/* {signin ? <p>Sei registrato</p> : <SignInCard /> } */}
      {/* <SignInCard /> */}
      <LogInCard />
    </div>
  );
}


export default App;