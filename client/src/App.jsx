import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router.jsx';
import NavBar from './components/NavBar';
import { shoppingListContext } from './context/shoppingListContext.jsx';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <>
      <shoppingListContext.Provider value={{shoppingList, setShoppingList}}>
        <BrowserRouter>
            <Router />
          <NavBar />
        </BrowserRouter>
      </shoppingListContext.Provider>
    </>
  )
}

export default App;