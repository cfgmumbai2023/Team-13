import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import './loginPageStyle.css'
import '../../App.css'


export default function SignInPage() {
    const [role, setRole] = useState('');
    const handleRoleChange = (event) => {
        setRole(event.target.value);
      };
    return (
        <div className='all'>
        <div className="text-center m-3-auto ">
            <h2 className='hd4'>Sign In </h2>
            <form action="/home" className='form3'>
            <div>
          <label className='labelData'>
            Role:
            <select value={role} onChange={handleRoleChange} >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">Coach</option>
              <option value="user">Instructor</option>
              
            </select>
          </label>
        </div>
                <p>
                    <label className='labelData'>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label className='labelData'>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )
}
