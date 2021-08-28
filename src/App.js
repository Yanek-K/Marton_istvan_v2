import React from "react";
import { Route, Switch } from "react-router-dom";
import "./default.scss";

//Components
import Header from "./components/Header";

// Pages
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import The_Series from "./pages/The_Series";
import The_Artist from "./pages/The_Artist";
import The_Szunets from "./pages/The_Szunets";
import The_Artists_Statement from "./pages/The_Artists_Statement";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import LegalNotice from "./pages/LegalNotice";

// PAGES NOT IN USE
// import Cart from "./pages/Cart";
// import UnderConstruction from "./pages/UnderConstruction";
// import Sales from "./pages/Sales";
import ImageUpload from "./pages/ImageUpload";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/the_series" component={The_Series} />
        <Route path="/the_artist" component={The_Artist} />
        <Route path="/the_szünets" component={The_Szunets} />
        <Route
          path="/the_artist's_statment"
          component={The_Artists_Statement}
        />
        <Route path="/product_details/:productId" component={ProductDetails} />
        <Route path="/legal_notice" component={LegalNotice} />

        {/* PAGES NOT IN USE */}
        {/* <Route path="/cart" component={Cart} /> */}
        {/* <UnderConstruction /> */}
        <Route path="/image_upload" component={ImageUpload} />
        {/* <Route path="/sales" component={Sales} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
