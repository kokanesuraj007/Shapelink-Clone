
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
function Navbar(){

  const navigate=useNavigate()
return(
    <div className="nav_main" >
    <Link to="/">
      <img src="https://kcdn.twiikapp.com/images/logo.png" alt="logo" className='logoimg'/>
      </Link>
        <div className='nav_icon' >
      <a href='https://www.shapelink.com/en/start/gettheapp'>  <p className='lk'>Get the app </p></a>
      <a href='https://www.shapelink.com/en/start/contact'>  <p className='lk'>Contact</p></a>
      
       
      <p onClick={()=>navigate("/login")}  className='lk'>Login</p>
      
      <p onClick={()=>navigate("/signup")} className='lk' id='lk1'>Create account </p>  
        </div>
    </div>
 
)
}

export default Navbar;