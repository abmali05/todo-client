import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const AddProduct = () => {

    const [user] = useAuthState(auth);

    const ProductSubmit = event => {
        event.preventDefault();

        const product = {
            email: user.email,
            name: event.target.name.value,
            description: event.target.description.value,
            // price: event.target.price.value,
            // quantity: event.target.quantity.value,
            // supplier: event.target.supplier.value,
            // img: event.target.img.value
        }

        fetch('https://protected-scrubland-50002.herokuapp.com/addproduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),

        })
            .then(res => res.json())
            .then(data => data)
        event.target.reset();
        toast('Task Added Successfully');

    }



    return (
        <div className='container'>
            <div className='row mt-5'>
                <h2 className='text-center mb-3'>Please Add ToDo</h2>
                <div className='text-end mb-2'>
                    <Link to="/manageinventories" className="  btn btn-danger" >View ToDo</Link>
                </div>
                <form onSubmit={ProductSubmit} className=" mx-auto">

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" name="email" className="form-control" placeholder='your email' value={user.email} readOnly />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" name="name" className="form-control" placeholder='Task Name' required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input type="text" name="description" className="form-control" placeholder='Description' required />
                        </div>
                    </div>


                    <div className='row mb-3 w-50 mx-auto'>
                        <input type="submit" className="  btn btn-danger" value="Add ToDo" />
                    </div>

                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;