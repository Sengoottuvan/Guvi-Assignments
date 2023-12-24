import './App.css';
import Dashboard from './Page/Dashboard';
import Adminpage from './Page/adminpage';
import Editpage from './Page/Editpage';
import Addbookpage from './Page/addbookpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/admin" element={<Adminpage/>} />
            <Route path="/editbook/:id" element={<Editpage/>} />
            <Route path="/addbooks" element={<Addbookpage/>}/>
          </Routes>
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
