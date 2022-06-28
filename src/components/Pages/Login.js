import Form from '../../components/Form';
import Illustration from '../../components/Illustration';
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import TextInput from '../TextInput';

export default function Login() {
  return (
    <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration login />
            <Form className={`${classes.login}`}>
                <TextInput icon = "alternate_email" type="text" placeholder="Enter email"/>
                <TextInput icon = "lock" type="text" placeholder="Enter password"/>
                <Button>
                    <span>Submit Now</span>
                </Button>
                <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
            </Form>
        </div>
    </>
  )
}
