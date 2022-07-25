import "./App.css";
import SignInCard from "./components/SignIn/SignInCard";
import { useSelector } from "react-redux";

function App() {
  const { signIn } = useSelector((store) => store);
  return (
    <div className="App">{signIn ? <p>sono loggato</p> : <SignInCard />}</div>
  );
}

export default App;
