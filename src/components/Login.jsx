import react from "react";
import Input from "./Input";
import useHistory, {Link} from 'use-history'

function Login(props){

    function submitHandler(event){
        let history = useHistory();

        function submitHandler(){
            // event.preventDefault();
            // history.push("/profile")
        }
        
    }

    return(
        <form className="form">
        {!props.isRegistered && <p>Please login First</p>}
            <Input name="nameId" type="text" placeholder="Name" />
            <Input name="phNumber" type="tel" placeholder="Phone no." />
            <Input name="email" type="email" placeholder="Eamil" />
            {/* {!props.isRegistered && <Input type="password" placeholder="Comfirm Password"  />} */}
            <button onClick={submitHandler} type="submit">{props.isRegistered ? "Login" : "Register"}</button>
        </form>
    );
}

export default Login;