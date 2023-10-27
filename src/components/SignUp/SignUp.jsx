import { useContext, useEffect, useRef } from "react";
import { userContext } from "../../App";

const SignUp = () => {
    const {user, handleSignUp, navigate } = useContext(userContext);
    const email = useRef('');
    const password = useRef('');
    
    const handleSubmit = e => {
        e.preventDefault();
        handleSignUp(email.current.value, password.current.value);
        console.log("signing you up!");
    }

    useEffect(()=>{
        if(user){
            navigate('/');
        }
    })


    return (
        <div>
            <form className="text-black">
                <fieldset className="grid grid-cols-1 gap-3 justify-center items-center px-7 py-5 border-2 border-black border-opacity-[12%] rounded-lg w-1/3 mx-auto">
                    <legend className="text-left mx-7 px-2">Create New Account</legend>
                    <input className="border border-black rounded-lg py-3 px-5" placeholder="Type your email.." type="email" ref={email} name="email" />
                    <input className="border border-black rounded-lg py-3 pl-5" placeholder="Type your password.." type="password" ref={password} name="password" />
                    <button onClick={handleSubmit} className="bg-[green] text-white px-3 py-2 rounded-lg active:text-[17px] transition-all duration-[175ms] w-auto mx-auto text-lg font-medium" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUp;