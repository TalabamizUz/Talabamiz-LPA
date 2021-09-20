import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainContent from "./Containers/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {!loading ? (
        <>
          <div className="body">
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="base">
              <span></span>
              <div className="face"></div>
            </div>
          </div>
          <div className="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className="redirecting">Redirecting</h1>
        </>
      ) : (
        <Router basename={"/"}>
          <Route exact path="/">
            <Header />
            <MainContent />
            <Footer />
          </Route>
        </Router>
      )}
    </div>
  );
}

export default App;
