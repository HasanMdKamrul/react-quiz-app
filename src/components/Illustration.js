import image from '../assets/images/login.svg';
import signupImage from '../assets/images/signup.svg';
import classes from '../styles/Illustration.module.css';

export default function Illustration({login}) {
  return (
    <div className={classes.illustration}>
        <img src={login? image: signupImage} alt={login? "Login Illustration" : "Signup Illustration"} />
    </div>
  )
}
