import { useContext } from "react";
import { userContext } from "../../App";

const Home = () => {
    const {user} = useContext(userContext);

    return (
        <div>
            <h2>This is the home!</h2>
            {
                user ?
                <div>
                    <p>You&apos;re logged in!</p>
                </div> :
                <p>Please login to see your details!</p>
            }
        </div>
    );
};

export default Home;