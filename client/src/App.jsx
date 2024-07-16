import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router.jsx';
import { NavBar } from './components';

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  return (
    <>
        <BrowserRouter>
            <Router />
            <NavBar />
        </BrowserRouter>
    </>
  )
}

export default App;