import Home from "./page/homepage/home";
import Contact from "./page/contactpage/contact";
import Product from "./page/productpage/product";
import Gioithieus from "./page/aboutpage/gioithieus";
import Signinpage from "./page/signin_signupage/signinpage";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Signuppage from "./page/signin_signupage/signuppage";
import Productdetailpage from "./page/productdetailpage/productdetailpage";
import Cartpage from "./page/cartpage/cartpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Signinpage/>}/>
        <Route path="/register" element={<Signuppage/>}/>
        <Route path="/products" element={<Product/>} />
        <Route path="/about" element={<Gioithieus/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/getproductsome" element={<Productdetailpage/>} />
        <Route path="/cart" element={<Cartpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 