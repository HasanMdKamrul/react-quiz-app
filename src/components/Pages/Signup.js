import Illustration from '../Illustration';
import SignUpForm from '../SignUpForm';

export default function Signup({title}) {
  console.log(title);
  return (
    <>
         <h1>Create an account</h1>
         <div className="column">
            <Illustration /> 
            <SignUpForm />
         </div>

    </>
  )
}
