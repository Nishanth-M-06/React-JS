import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Products from './components/Products';
import Services from './components/Services'
import CustomerCare from './components/CustomerCare';

function App() {
  return (

    <Routes>
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/customerCare' element={<CustomerCare/>}/>
    </Routes>
  );
}

export default App;
