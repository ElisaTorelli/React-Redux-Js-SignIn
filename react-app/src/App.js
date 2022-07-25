import { useSelector } from 'react-redux';
import './App.css';
import SignInCard from './components/SignIn/SignInCard'


function App() {
  const {signin} = useSelector((store) => store)

  
  return (
    <div className="App">
      <SignInCard /> 
    </div>
  );
}


export default App;