
// import img from './component/Images/Women.jpg';
import {Route, Routes } from "react-router-dom";

import side from './component/Images/sidebar.jpg';
import SignUp from './component/singup/SignUp';
import SignIn from './component/signin/SignIn';
import ForgetE from './component/forgot-email/Forget-Email';
import ForgetC from './component/forget-code/Forget-Code';
import NewPass from './component/newpss/NewPass';
import SignUpC from "./component/SignUpC/SignUpC";
function App() {
 
  
  return (
    <div className='flex pr-12 '>
  
    <div >
    <img  className='relative  h-screen w-screen  pr-12 'src={side} alt=""/>
    </div>
    <div>
   
      <Routes>

        <Route path="/SignUp" element={<SignUp />} />
        <Route index element={<SignIn />} />
        <Route path="/ForgetE" element={<ForgetE />} />
        <Route path="/ForgetC" element={<ForgetC />} />
        <Route path="/NewPass" element={<NewPass />} />
        <Route path="/SignUpC" element={<SignUpC />} />

      </Routes>
  
    </div> 
    
        </div>
  );
}

export default App;
