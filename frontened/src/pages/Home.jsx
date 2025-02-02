import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';

const Home = () => {

  const user = useContext(UserDataContext);
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('/Traffic.jpg')]  h-screen w-full flex pt-5   flex-col   justify-between  ">
           
           <img src="/Bharat.png"  className="ml-5 w-48"  alt="Image" />


           <div className="py-5 px-5 pb-7  bg-white flex flex-col gap-2 items-center">

               <h2 className="  lg:text-3xl text-2xl  font-bold  ">Experience The Bharat Ride {user} </h2>


               <Link to='/login' className="flex items-center justify-center pl-4 pr-4 pt-1 pb-1 w-96 hover:scale-101 hover:bg-gray-900 bg-black text-white rounded shadow-lg ">
               Continue Ride
               </Link>


           </div>
      </div>
    </div>
  )
}

export default Home;


 


