import "./App.css";
import Header from "./containers/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
// import ProductComponent from "./containers/ProductComponent";

function App() {
  return <div className="App">
    <Router>
      <Header/>
        <Routes>
           <Route path='/' element={<ProductListing/>}/>
           <Route path='/product/:productId' element={<ProductDetail/>}/>
           <Route>404 not found</Route>
        </Routes>
    </Router>
  </div>;
}

export default App;
