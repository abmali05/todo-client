import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {

    const [user] = useAuthState(auth);

    const userSignout = () => {
        signOut(auth);
    }
    return (
        <div className=' sticky-top'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">My ToDo</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home"><i class="bi bi-house-fill"></i> Home</Link>

                            </li>


                            {
                                user && <>
                                    <li className="nav-item">
                                        <Link to="/manageinventories" className="nav-link" ><i class="bi bi-table"></i> View ToDo</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/addproduct" className="nav-link" ><i class="bi bi-plus-square-fill"></i> Add ToDo</Link>
                                    </li>

                                </>
                            }
                            {
                                user ?
                                    <li className="nav-item">
                                        <Link to="/signin" onClick={userSignout} className="nav-link" ><i class="bi bi-box-arrow-in-left"></i> Sign Out </Link>

                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link to="/signin" className="nav-link" ><i class="bi bi-box-arrow-in-right"></i> Sign In</Link>
                                    </li>
                            }


                            {
                                user && <>

                                    <li className="nav-item ">
                                        <div className='nav-link'><i class="bi bi-person-square"></i> {user.email}</div>


                                    </li>
                                </>
                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;