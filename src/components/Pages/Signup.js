import { Link } from 'react-router-dom';
import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

export default function Signup() {
  return (
    <>
         <h1>Create an account</h1>
         <div className="column">
            <Illustration /> 
            <Form className={`${classes.signup}`}>
                <TextInput icon="person" type="text" placeholder="Enter name" />
                <TextInput icon="alternate_email" type="text" placeholder="Enter email" />
                <TextInput icon="lock" type="password" placeholder="Enter password" />
                <TextInput icon="lock_clock" type="password" placeholder="Confirm password" />
                <Checkbox text = "I agree to the Terms &amp; Conditions" type="checkbox" />
                <Button>
                    <span>Submit Now</span>
                </Button>
                <div class="info">Already have an account? <Link to="/login">Login</Link> instead.</div>
            </Form>
         </div>

    </>
  )
}
