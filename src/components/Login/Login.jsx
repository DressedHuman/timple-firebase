import { useContext, useEffect, useRef } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, handleSignIn, providerGoogle } = useContext(userContext);
    const navigate = useNavigate();
    const email = useRef('');
    const password = useRef('');

    useEffect(() => {
        user && navigate('/');
    }, [user])

    const handleSubmit = e => {
        e.preventDefault();
        console.log("signing in...", email.current.value, password.current.value);
    }


    return (
        <div>
            {
                user ?
                    <p>Redirecting to homepage...</p> :
                    <div>
                        <form className="text-black">
                            <fieldset className="grid grid-cols-1 gap-3 justify-center items-center px-7 py-5 border-2 border-black border-opacity-[12%] rounded-lg w-1/3 mx-auto">
                                <legend className="text-left mx-7 px-2">Sign In</legend>
                                <input className="border border-black rounded-lg py-3 px-5" placeholder="Type your email.." type="email" ref={email} name="email" />
                                <input className="border border-black rounded-lg py-3 pl-5" placeholder="Type your password.." type="password" ref={password} name="password" />
                                <button onClick={handleSubmit} className="bg-[green] rounded-lg py-3 px-4 text-white font-semibold text-xl w-1/3 mx-auto" type="submit">Submit</button>
                            </fieldset>
                        </form>
                        <div className="mt-7">
                            <p className="m-5">or</p>
                            <div className="flex justify-center items-center gap-4">
                                <button onClick={() => handleSignIn(providerGoogle)} className="bg-[green] text-white px-3 py-2 rounded-lg active:text-[15px] transition-all duration-[175ms]">Google Login</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;