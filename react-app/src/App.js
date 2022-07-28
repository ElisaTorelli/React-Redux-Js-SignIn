import './App.css';
import SignInCard from './components/SignIn/SignInCard'
import LogInCard from './components/LogIn/LogInCard';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ToDo from './pages/ToDo';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/todo' element={<ToDo />}/>
          <Route path='/signin' element={<SignInCard />}/>
          <Route path='/login' element={<LogInCard />}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;