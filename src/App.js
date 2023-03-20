import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import BoardList from './pages/BoardList';
import Join from './pages/Join';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/BoardList/:id' element={<BoardList />} />
          <Route path='/Join/:id' element={<Join />} />
          <Route path='/Login/:id' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
