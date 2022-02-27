import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyled";
//Import Pages
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <h1>random </h1>
      <GlobalStyle />
      {/* importing file to apply global styles  */}
      <AboutUs />
    </div>
  );
}

export default App;
