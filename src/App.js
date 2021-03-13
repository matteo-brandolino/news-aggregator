import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard'
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;
