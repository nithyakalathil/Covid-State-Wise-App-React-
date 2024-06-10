import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adddata from './components/Adddata';
import ViewAll from './components/ViewAll';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Adddata/>}/>
  <Route path='/v' element={<ViewAll/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
