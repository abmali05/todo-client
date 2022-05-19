import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container bg-danger text-white text-center">


            <div className="row d-flex justify-content-between pt-5">
                <div className="col-md-6 mb-3">
                    <h4> Follow us: <i className="bi bi-facebook"></i> <i className="bi bi-youtube"></i> <i className="bi bi-twitter"></i> <i className="bi bi-linkedin"></i>  </h4>                </div>

                <div className="col-md-6 mb-3">
                    <h4>Subscribe Newsletter</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Email" />
                        <button className="btn btn-outline-light" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;