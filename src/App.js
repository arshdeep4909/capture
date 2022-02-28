import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyled";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      {/* importing file to apply global styles  */}
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {/* switch also means that the first time our url matches any path we render that
        component */}
          <Route path="/" exact>
            {/* exact esnures that we render AboutUs only when we have /
        i.e path is exactly equal to the value that we provided   */}
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            {/* /work/:id means that if write any text after /work/{text}  that will bring me to 
        MovieDetail */}
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
