import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-primary text-lg py-2 inline-block"
                    : "text-white hover:underline text-lg hover:text-primary duration-300 py-2 inline-block"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;