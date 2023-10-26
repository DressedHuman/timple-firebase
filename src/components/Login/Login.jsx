import { useContext, useEffect } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, handleSignIn, providerGoogle } = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        user && navigate('/');
    }, [user])
    return (
        <div>
            {
                user ?
                <p>Redirecting to homepage...</p> :
                <div>
                    <button onClick={() => handleSignIn(providerGoogle)} className="bg-[green] text-white px-3 py-2 rounded-lg">Google Login</button>
                </div>
            }
        </div>
    );
};

export default Login;