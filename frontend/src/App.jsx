import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {Routes,Route} from 'react-router-dom';
import State from "./hooks/State";
import Hooks from "./hooks/Hooks";
import Form from "./hooks/Form";
import Effect from "./hooks/Effect";
import EffectWithApi from "./hooks/EffectWithApi";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>{/*class components*/}
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/hooks" element={<Hooks/>}>
      <Route path="useState" element={<State/>}/>
    <Route path="form" element={<Form/>}/>
    <Route path="effect" element={<Effect/>}/>
    <Route path="effectwithapi" element={<EffectWithApi/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App