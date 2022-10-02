
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Education from './Pages/Home/Skills/Education';
import Journalism from './Pages/Home/Skills/Journalism';
import Others from './Pages/Home/Skills/Others';
import Programming from './Pages/Home/Skills/Programming';
import Skills from './Pages/Home/Skills/Skills';
import Tools from './Pages/Home/Skills/Tools';
import Traveling from './Pages/Home/Skills/Traveling';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Resume from './Pages/Resume/Resume';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div style={{backgroundColor: '#001133'}}> 
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          {/* <Route index element={<Skills></Skills>}></Route> */}
          <Route index element={<Programming></Programming>}></Route>
          
          {/* <Route path="programming" element={<Programming></Programming>}></Route> */}
          <Route path="tools" element={<Tools></Tools>}></Route>
          <Route path="journalism" element={<Journalism></Journalism>}></Route>
          <Route path="traveling" element={<Traveling></Traveling>}></Route>
          <Route path="education" element={<Education></Education>}></Route>
          <Route path="others" element={<Others></Others>}></Route>
          
        </Route>
        <Route path='/service/:id' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        {/* <Route path='/blogs' element={<Blogs></Blogs>}></Route> */}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
