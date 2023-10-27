import { useContext } from "react";
import { userContext } from "../../App";

const Home = () => {
    const { user } = useContext(userContext);

    return (
        <div>
            {
                user ?
                    <div className="flex flex-col justify-center items-center gap-7">
                        <img src={user.photoURL} alt="" />
                        <h2 className="text-3xl font-bold">Welcome, <span className="text-[green]">{user.displayName}!</span></h2>
                    </div> :
                    <p>Please login to see your details!</p>
            }
        </div>
    );
};

export default Home;