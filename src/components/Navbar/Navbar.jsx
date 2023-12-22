import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const navItems = <>
        <Link to={'/'}><li><a>Home</a></li></Link>
        <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link>
        <Link to={'/my-tasks'}><li><a>My Tasks</a></li></Link>
        <Link to={'/faq'}><li><a>FAQ</a></li></Link>
        <Link to={'/support'}><li><a>Support</a></li></Link>
    </>;

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res)
                toast.success('Logged Out Successfully!')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-slate-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-purple-700 flex items-center justify-center"><FaClock></FaClock> TaskSync Pro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li className="mb-2">
                                    <a className="justify-between">
                                        {user.displayName}
                                    </a>
                                </li>
                                <hr />
                                <Link to={'/dashboard'}><li className="mt-2"><a>Dashboard</a></li></Link>
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                    </>

                        :
                        <Link to={'/login'}><button className="btn btn-ghost normal-case">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;