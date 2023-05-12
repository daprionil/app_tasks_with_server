import { NavLink } from "react-router-dom";

import Logo from '../../public/logo.png';

function Header() {
    return (
        <header className="py-1 px-4 bg-main grid grid-cols-2 shadow-all items-center rounded-3xl">
            {/*//? Icon header */}
            <NavLink to="/">
                <div className="hover:scale-105 transform transition-all duration-300 max-w-[100px] sm:max-w-[150px]">
                    <img src={Logo} alt="users tasks logo"/>
                </div>
            </NavLink>

            {/*//? List menu */}
            <nav className=" justify-self-end text-xs sm:text-sm md:text-base">
                <ul className="flex gap-3 font-raleway font-black">
                    <NavLink to='/tasks'>
                        <li className="bg-white px-6 py-[6px] rounded-full shadow-all hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300">
                            Tareas
                        </li>
                    </NavLink>
                    <NavLink to='/users'>
                        <li className="bg-red-500 px-6 py-[6px] rounded-full shadow-all hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300">
                            Usuarios
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;