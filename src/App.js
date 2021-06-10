import React from "react";
import { Route } from "react-router-dom";
import "./default.scss";

//Components
import Header from "./components/Header";

// Pages
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import Sales from "./pages/Sales";
import Shop from "./pages/Shop";
import The_Artist from "./pages/The_Artist";
import The_Szunets from "./pages/The_Szunets";
import The_Series from "./pages/The_Series";
import Footer from "./components/Footer";
import ImageUpload from "./pages/ImageUpload";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Homepage} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/sales" component={Sales} />
      <Route path="/shop" component={Shop} />
      <Route path="/the_artist" component={The_Artist} />
      <Route path="/the_szünets" component={The_Szunets} />
      <Route path="/the_series" component={The_Series} />
      {/* <Route path="/image_upload" component={ImageUpload} /> */}
      <Route path="/product_details/:productId" component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Footer />
    </div>
  );
}

export default App;
