import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
// import ViewItem from "./pages/ViewItem";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="catalog" element={<Catalog />} />
            {/* <Route path="viewitem" element={<ViewItem />} /> */}
          </Route>
        </Routes> 
      </Router>
    </main>
  ); 
}
