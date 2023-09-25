import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
    return (
        <div>
            <section className="flex justify-between items-center">
                {/* logo */}
                <div>
                    <img className=" w-[100px] lg:w-[180px]" src={logo} alt="" />
                </div>

                {/* navlinks */}
                <div>
                    <nav>
                        <ul className="flex gap-3 lg:gap-6">
                            <NavLink to='/' className={({isActive, isPending}) => isActive? 'text-[#FF444A] underline' : isPending? 'pending' : ""}><li >Home</li></NavLink>

                            <NavLink to='/donation' className={({isActive, isPending}) => isActive? 'text-[#FF444A] underline' : isPending? 'pending' : ""}><li >Donation</li></NavLink>

                            <NavLink to='statistics' className={({isActive, isPending}) => isActive? 'text-[#FF444A] underline' : isPending? 'pending' : ""}><li >Statistics</li></NavLink>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Navbar;