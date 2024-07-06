import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router.jsx';
import NavBar from './components/NavBar';
import './App.css';


function App() {

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