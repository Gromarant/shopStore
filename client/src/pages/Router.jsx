import { Route, Routes } from 'react-router-dom';
import Bill from './Bill';
import Pantry from './Pantry';
import Sale from './Sale';
import List from './List';
import Search from './Search';

function Router() {

  return (
    <main>
      <Routes>
        <Route path='/bill' element={<Bill/>}/>
        <Route path='/pantry' element={<Pantry/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </main>
  )
}

export default Router;