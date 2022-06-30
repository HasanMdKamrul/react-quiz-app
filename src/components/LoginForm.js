
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import classes from '../styles/Login.module.css';
import { useAuth } from './Contexts/AuthContext';


export default function LoginForm() {
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[loading,setLoading] = useState();
    const[error,setError] = useState();

    const navigate = useNavigate();

    const {login} = useAuth();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate('/')
        } catch (err) {
            setLoading(false);
            setError("Failed to login!")
        }
    };

  return (
    <Form className={`${classes.login}`} onSubmit={handleSubmit}>
        <TextInput required icon = "alternate_email" type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <TextInput required icon = "lock" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button type="Submit" disabled={loading}>
            <span>Submit Now</span>
        </Button>
        <span><p className="error">{error}</p></span>
        <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
    </Form>
  )
}





