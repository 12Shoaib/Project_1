import './Navbar.css'
import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'

function Navbar() {
    const[show, setShow ] = useState(true)
    
    function toggle() {
        setShow(!show)
    }  
return(
    <div  >
       {show ?  <span className='bar' onClick={toggle}><FaBars /> </span> :  <span className='bar' ><FaBars /> </span>}
     
      <nav className='mainComponent'>
     
      <ul className='buttons'>
         
          <Link className='logo' to='/'>Shoaib</Link>
          <Link className='linker' to='/' >Home</Link>
          <Link className='linker' to='/register'>Register</Link>
          <Link className='linker' to= '/login'>Login</Link>
          <label className='profileIcon' to='/' ><CgProfile /> </label>
         
      </ul>
      </nav>
    </div>
)
}
export default Navbar

