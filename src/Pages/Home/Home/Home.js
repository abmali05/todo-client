import { Link } from 'react-router-dom';


const Home = () => {


    return (

        <div className='conatiner'>

            <h2 className='text-center mt-5'>Welcome to ToDo App</h2>
            <div className='text-center'>
                <Link to="/manageinventories" className="mt-5 btn btn-danger" >View ToDo</Link><br />
                <Link to="/addProduct" className="mt-5 btn btn-danger" >Add ToDo</Link>
            </div>








        </div>
    );
};

export default Home;