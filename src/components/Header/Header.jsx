import { NavLink } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { userContext } from "../../App";

const Header = () => {
    const {user, handleSignOut} = useContext(userContext);
    return (
        <div className="py-7 px-12 flex justify-between items-center gap-7">
            <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? 'pending' : ''} to={'/'}>Home</NavLink>

            {
                user ?
                <button onClick={handleSignOut} className="text-white rounded-lg font-semibold px-3 py-2 bg-[gray] active:text-[15px] transition-all duration-[175mx]">Sign Out</button> :
                <div className="flex justify-center items-center gap-7">
                    <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? 'pending' : ''} to={'/login'}>Login</NavLink>
                    <p>or</p>
                    <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? 'pending' : ''} to={'/signup'}>Sign Up</NavLink>
                </div>
            }
        </div>
    );
};

export default Header;