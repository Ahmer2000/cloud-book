import React,{useState}from 'react'
import {useNavigate} from 'react-router-dom';
import { baseUrl } from '../url';


const host = baseUrl;
const Login = (props) => {
        let navigate = useNavigate();
        const [credentials, setCredentials] = useState({email:'',password:''})
        const handleSubmit = async (e) => {
            e.preventDefault();
            //API call
            const response = await fetch(`${host}/api/auth/login`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                // mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email:credentials.email,password:credentials.password })
            });
            let json = await response.json()
            console.log(json);
            if (json.success) {
                // redirect to home page
                localStorage.setItem('token',json.authtoken);
                props.showAlert('Logged in successfully','success')
                navigate('/');
            }
            else{
                props.showAlert('Invalid credentials','danger')
            }
        };
        
        const onChange = (e)=>{
            setCredentials({...credentials,[e.target.name]:e.target.value})
        }
  return (
    <div className='container my-5'>
     <h2>Login</h2>
      <form className='my-4' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email"  name='email' aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name='password'/>
            </div>
            <button type="submit" className="btn btn-primary" >Login</button>
      </form>
    </div>
  )
}

export default Login
