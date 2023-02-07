
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnglishBooks from './components/EnglishBooks';
import Kirtans from './components/Kirtans';
import  ProductDetails  from './components/ProductDetails';

function App() {
  console.log(process.env.API_KEY);
  return (
   <Router>
    <Navbar/>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/books" element={<EnglishBooks/>} />
    <Route path="/kirtans" element={<Kirtans />} />
    <Route path="/product/:id" element={<ProductDetails />} />
  </Routes>
     
</Router>
    

  );
}

export default App;
