import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loginpage from './Pages/auth/Login';
import Forgetpasswordpage from './Pages/auth/ForgetPassword';
import Resetpasswordpage from './Pages/auth/ResetPassword';
import Register from './Pages/Unauth/Register';
import Createquery from './Pages/Createquery/Createquery';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myqueryhistory from './Pages/Myqueries/Myqueryhistory';
import Detailedquery from './Pages/Detailedquery/Detailedquery';
import Userprofile from './Pages/UserProfile/Profile';
import AdminPanel from './Pages/adminpage/adminpage';
import Mysolutionhistory from './Pages/Myqueries/Mysolutions';
import Detailedformentorquery from './Pages/Detailedquery/querydetailsformentor';
import ProtectedRoute from './Private-routes/Privaterouter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/query" element={ <ProtectedRoute><Createquery /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/forget-password" element={<Forgetpasswordpage />} />
          <Route path='/reset-password' element={<Resetpasswordpage/>}/>
          <Route path="/signup" element={<Register />} />
          <Route path='/myqueries' element={<ProtectedRoute><Myqueryhistory/></ProtectedRoute>}/>
          <Route path='/mysolutions' element={<ProtectedRoute><Mysolutionhistory/></ProtectedRoute>}/>
          <Route path='/querydetails/:queryid' element={<ProtectedRoute><Detailedquery/></ProtectedRoute>}/>
          <Route path='/querychatdetails/:queryid' element={<ProtectedRoute><Detailedformentorquery/></ProtectedRoute>}/>
          <Route path='/userprofile' element={<ProtectedRoute><Userprofile/></ProtectedRoute>}/>
          <Route path='/adminpage' element={<ProtectedRoute><AdminPanel/></ProtectedRoute>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
