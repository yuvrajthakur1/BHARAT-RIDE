
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignUp';


//Using  React Router For Routing in React

const App = ()=>{

  return(
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />\
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/signup' element={<UserSignUp/>} />
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignUp/>} />
    </Routes>
    </div>
  )
}

export default App
