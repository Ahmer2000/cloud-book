import React,{useState}from 'react'
import {useNavigate} from 'react-router-dom';
import { baseUrl } from '../url';

const host = baseUrl;

const Signup = (props) => {

        let navigate = useNavigate();
        const [credentials, setCredentials] = useState({name:'',email:'',password:'',cpassword:''})
        const handleSubmit = async (e) => {
            e.preventDefault();
            const{name,email,password} = credentials;
            //API call
            const response = await fetch(`${host}/api/auth/createUser`, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                // mode: "cors", // no-cors, *cors, same-origin
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email,password})
            });
            let json = await response.json()
            console.log(json);
            
               if (json.success) {
                localStorage.setItem('token',json.authtoken);
                navigate('/');
                props.showAlert('Account created successfully','success')
               }
               else{
                props.showAlert('Invalid credentials','danger')
               }
        };
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className='container my-2'>
     <h2>Sign up to use cloudbook</h2>
      <form className='my-4' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={onChange} value={credentials.name} id="name" name='name'/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email"  name='email' aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} minLength={5} required value={credentials.password} id="password" name='password'/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" onChange={onChange} minLength={5} required value={credentials.cpassword} id="cpassword" name='cpassword'/>
            </div>
            <button type="submit" className="btn btn-primary" >Sign up</button>
      </form>
    </div>
  )
}

export default Signup
