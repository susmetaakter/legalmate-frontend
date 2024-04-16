import React, { useContext } from 'react';
import ActiveLink from '../components/ActiveLink';
import { AuthContext } from '../providers/AuthProvider';

const NavItems = () => {
    const { currentUser } = useContext(AuthContext)
    // console.log(currentUser);

    return (
        <>
        {
            currentUser.role=== "client"?
            <>
                <li><ActiveLink to="/">Home</ActiveLink></li>
                <li><ActiveLink to="/attorneys">Find lawyers</ActiveLink></li>
                <li><ActiveLink to="/postACase">Post a Case</ActiveLink></li>
                <li><ActiveLink to="/messages">Messages</ActiveLink></li>
            </>:
            currentUser.role=== "attorney"?
            <>
                <li><ActiveLink to="/">Home</ActiveLink></li>
                <li><ActiveLink to="/findCases">Find cases</ActiveLink></li>
                <li><ActiveLink to="/messages">Messages</ActiveLink></li>
            </>:
            currentUser.role=== "admin"?
            <>
                <li><ActiveLink to="/">Home</ActiveLink></li>
                <li><ActiveLink to="/attorneys">Find lawyers</ActiveLink></li>
                <li><ActiveLink to="/allAttorneys">All lawyers</ActiveLink></li>
                <li><ActiveLink to="/allClients">All clients</ActiveLink></li>
                <li><ActiveLink to="/allCases">All cases</ActiveLink></li>
                <li><ActiveLink to="/allPayments">All payments</ActiveLink></li>
                <li><ActiveLink to="/allReviews">All Reviews</ActiveLink></li>
            </>:

            <>
                <li><ActiveLink to="/">Home</ActiveLink></li>
                <li><ActiveLink to="/practiceAreas">Practice areas</ActiveLink></li>
                <li><ActiveLink to="/attorneys">Our lawyers</ActiveLink></li>
                <li><ActiveLink to="/aboutUs">About us</ActiveLink></li>
                <li><ActiveLink to="/contact">Contact</ActiveLink></li>
                <li><ActiveLink to="/awareness">Awareness</ActiveLink></li>
            </>

        }            
        </>
    );
};

export default NavItems;