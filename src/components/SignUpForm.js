import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import { useAuth } from '../components/Contexts/AuthContext';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import classes from '../styles/Signup.module.css';



export default function SignUpForm() {
    const [email, setEmail] = useState();
    const [confirmEmail, setConfirmEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const[agree,setAgree] = useState();
    const [loading,setLoading] = useState();
    const[error,setError] = useState();
    const [username,setUsername] = useState();
    
    const {signup} = useAuth();

    const navigate = useNavigate()

    const submitHandler = async (e)=>{
        e.preventDefault();
        
        if (password !== confirmPassword || email !== confirmEmail) {
            return setError("Password or Email don't match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email,password,username);
            navigate('/')
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Failed to create an account');
        }
    };

  return (
    <Form className={`${classes.signup}`} onSubmit={submitHandler}>
        <TextInput required icon="person" type="text" placeholder="Enter name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <TextInput required icon="alternate_email" type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <TextInput required icon="alternate_email" type="text" placeholder="Confirm email" value={confirmEmail} onChange={(e)=>setConfirmEmail(e.target.value)} />
        <TextInput required icon="lock" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <TextInput required icon="lock_clock" type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        <Checkbox required text = "I agree to the Terms &amp; Conditions" type="checkbox" value={agree} onChange={(e)=>setAgree(e.target.value)}/>
        <Button disabled={loading}>
            <span>Submit Now</span>
        </Button>
        <span><p className="error">{error}</p></span>
        <div class="info">Already have an account? <Link to="/login">Login</Link> instead.</div>
    </Form>
  )
}
