import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainContent from "./Containers/MainContent/MainContent";


function App() {
  return (
    <div className="App">
      <Router basename={"/"}>
        <Route exact path="/">
          <Header />
          <MainContent />
        </Route>
      </Router>
    </div>
  );
}

export default App;
