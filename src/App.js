import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Instructor from "./Components/Instructor/Instructor";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        {/* here added header cause we show it all the pages that why use in router but out of switch */}
        <Header></Header>
        <Switch>
          {/* switch ro to route path and run the specefic component */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/instructor">
            <Instructor></Instructor>
          </Route>
          {/* if any one loadedd invalid url then go on this route */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
